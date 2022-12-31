Feature: Test authentication methods in Django Rest Framework

Scenario: POST registration data
Given That the registration system has been completely developed and I am accessing the registration page


When I set request body
    

Then My account is created



Scenario: POST login data
Given That I have registered using my information and I am accessing the login Feature

When I enter my credentials

Then I receive HTTP response 200 for GET




