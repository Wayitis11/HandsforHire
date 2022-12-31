from behave import given, when, then, step
import requests
import json


api_endpoints = {}
request_headers = {}
response_codes = {}
respones_texts = {}
request_bodies = {}
api_url = None


@given(u'That the registration system has been completely developed and I am accessing the registration page')
def step_impl(context):
    context.url = 'http://127.0.0.1:8000/api/register-client/'
    context.headers = {'content-type': 'application/json'}

    context.body = {
        'email': 'rozan.cresta28@gmail.com',
        'first_name': 'Jenish',
        'last_name': 'Maharjan',
        'username': 'Jenish123',
        'password': "1234",
        'password2': '1234',
        'is_client': True
    }


@given(u'That I have registered using my information and I am accessing the login Feature')
def step_impl(context):
    
    context.loginUrl = 'http://127.0.0.1:8000/api/account/login/'

    context.loginHeader = {'content-type': 'application/json'}

    context.body = {
        'email': 'iusethisgm@gmail.com',
        'first_name': 'Jenish',
        'last_name': 'Maharjan',
        'username': 'Jenish123',
        'password': "password123",
        'password2': 'password123',
        'is_client': True
    }

    context.loginData = {
        'username': 'Jenish123',
        'password': '1234'
    }


@when(u'I set request body')
def step_impl(context):

    context.res = requests.post(context.url, data=json.dumps(
        context.body), headers=context.headers)

    print(context.res.status_code)


@when('I enter my credentials')
def step_impl(context):

    context.res = requests.post(context.url, data=json.dumps(
        context.body), headers=context.loginHeader)

    context.response = requests.post(context.loginUrl, data=json.dumps(
        context.loginData), headers=context.loginHeader)

    print(context.loginData)


@then(u'My account is created')
def step_impl(context):

    assert context.res.status_code == 200


@then('I receive HTTP response 200 for GET')
def step_impl(context):

    print(context.response.status_code)

    assert context.response.status_code == 200
