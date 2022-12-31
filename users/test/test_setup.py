from rest_framework.test import APITestCase
from django.urls import reverse


class TestSetup(APITestCase):

    def setUp(self):

        self.register_url = reverse('clientRegister')
        self.clientLogin_url = reverse('accountLogin')
        self.electricianRegister_url = reverse('plumberRegister')
        self.plumberRegister_url = reverse('plumberRegister')
        self.hire_url = reverse('hire-professional', args=['Ajay'])
        self.update_client_profile_url = reverse('update_client')
        self.professional_review_url = reverse('review-professional', args=['Ajay'])
        self.professional_review_Update_url = reverse('updateReview', args=[1])

        self.incompleteData = {
            'first_name': 'Jenish',
            'last_name': 'Maharjan',
            'password': '1234',
            'password2': '1234',
        }

        self.userdata = {
            'first_name': 'Jenish',
            'last_name': 'Maharjan',
            'email': 'iusethisgm@gmail.com',
            'username': 'deep1234',
            'password': '1234',
            'password2': '1234',

        }

        self.logindata = {
            'username': 'Jenish123',
            'password': 'password'
        }

        self.validData = { 
            'username': 'deep1234',
            'password': '1234'
        }

        self.electricianData = {
            'first_name': 'Ajay',
            'last_name': 'Pudasaini',
            'email': 'iusethisgm@gmail.com',
            'password': 'password123',
            'password2': 'password123',
            'is_electrician': True
        }

        self.plumberData = {
            'firsr_name': 'Ajay',
            'last_name': 'Pudasaini',
            'username' : 'Ajay',
            'email': 'dipkha1056@gmail.com',
            'password': 'password123',
            'password2': 'password123',
            'is_plumber': True,
            'charge_fee' : 2000,
            'about_me' : 'Hello world'
        }

        self.hireData = {
            'client' : 1,
            'professional' : 1,
            'hire_start_date_time' : '2021-08-25 00:00',
            'hire_end_date_time' : '2021-08-28 00:00'
        }

        self.updatingData = {
            'phone_number' : '9860330360',
            
        }

        self.commentData = {
            'comment' : 'Does good job, works efficiently',
            'stars' : 5
        }

        self.updateCommentData = {
            'comment' : 'Works well, but is not punctual',
            'stars' : 3
        }

        return super().setUp()

    def tearDown(self):
        return super().tearDown()
