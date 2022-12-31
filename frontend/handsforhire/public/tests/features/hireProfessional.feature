Feature: Hire professionals

Scenario: Hire professionals
Given I am in a professionals profile after logging in
When I enter hire start and end date and click hire
Then I see successfully hired in toast
