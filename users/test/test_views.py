import json
from django.http import response
from django.test import client
from rest_framework.test import APIClient
from .test_setup import TestSetup
from ..models import User


class TestViews(TestSetup):

    def test_user_cannot_register_without_necessary_data(self):
        res = self.client.post(
            self.register_url, self.incompleteData, format='json')

        self.assertEquals(res.status_code, 200)



    def test_user_can_register(self):
        res = self.client.post(self.register_url, self.userdata, format='json')

        self.assertEqual(res.status_code, 200)



    def test_cannot_login(self):
        res = self.client.post(self.clientLogin_url,
                               self.userdata, format='json')

        self.assertEqual(res.status_code, 401)



    def test_user_can_login(self):

        self.client.post(self.register_url,
                         self.userdata, format='json')

        response = self.client.post(
            self.clientLogin_url, self.validData, format='json')

        self.assertEqual(response.status_code, 200)



    def test_user_can_hire(self):
        self.client.post(self.register_url, self.userdata, format='json')

        self.client.post(self.plumberData,
                         self.plumberRegister_url, format='json')

        response = self.client.post(
            self.clientLogin_url, self.validData, format='json')

        token = response.data['access']

        client = APIClient()

        client.credentials(HTTP_AUTHORIZATION='Bearer ' + token)

        res = client.post(self.hire_url, self.hireData,  format='json')

        self.assertEqual(res.status_code, 200)



    def test_user_can_update_profile(self):
        self.client.post(self.register_url, self.userdata, format='json')
        response = self.client.post(
            self.clientLogin_url, self.validData, format='json')

        token = response.data['access']

        client = APIClient()

        client.credentials(HTTP_AUTHORIZATION='Bearer ' + token)

        res = client.put(self.update_client_profile_url,
                         self.updatingData, format='json')

        self.assertEqual(res.status_code, 200)

        

    def test_user_can_comment_on_professional_profile(self):
        self.client.post(self.register_url,
                         self.userdata, format='json')
        response = self.client.post(
            self.clientLogin_url, self.validData, format='json')

        token = response.data['access']

        client = APIClient()

        client.credentials(HTTP_AUTHORIZATION='Bearer ' + token)

        res = client.post(self.professional_review_url,
                          self.commentData, format='json')

        self.assertEqual(res.status_code, 200)



    def test_user_cannot_comment_professional_profile_without_proper_authentication(self):
        self.client.post(self.register_url,
                         self.userdata, format='json')
        self.client.post(
            self.clientLogin_url, self.logindata, format='json')

        res = self.client.post(self.professional_review_url,
                          self.commentData, format='json')

        self.assertEqual(res.status_code, 401)



    def test_user_can_edit_their_comment(self):
        self.client.post(self.register_url,
                         self.userdata, format='json')

        response = self.client.post(
            self.clientLogin_url, self.validData, format='json')

        token = response.data['access']

        client = APIClient()

        client.credentials(HTTP_AUTHORIZATION='Bearer ' + token)
        self.client.post(self.professional_review_url,
                          self.commentData, format='json')

        res = client.post(self.professional_review_url,
                          self.commentData, format='json')

        self.assertEqual(res.status_code, 200)


    
