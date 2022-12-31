from behave import given, when, then, step
import requests
import json


@given('I have selected a professional in his page')
def step_impl(context):
    context.hireUrl = 'http://localhost:8000/api/hire-professional/Hardik55/'
    context.loginURL = 'http://localhost:8000/api/account/login/'
    context.headers = {'content-type': 'application/json'}

    context.loginData = {
        'username': 'Jenish123',
        'password': '1234'
    }

    context.body = {
        "hire_start_date_time": '2021-08-21 00:00',
        "hire_end_date_time": '2021-08 -22 00:12'
    }


@when('I request a hire using start and end dates')
def step_impl(context):
    context.response = requests.post(context.loginURL, data=json.dumps(
        context.loginData), headers=context.headers)

    print(context.response)

    context.headers = {'content-type' : 'application', 'Authorization' : 'Bearer ' + context.response.data['access']}


    context.res = requests.post(context.hireUrl, data=json.dumps(context.body), headers=context.headers)



@then('I receive successfully hired')
def step_impl(context):

    assert context.res.status_code == 401
