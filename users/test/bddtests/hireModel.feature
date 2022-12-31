Feature: Test Hire CRUD operations in DRF

Scenario: Hire professional
Given I have selected a professional in his page
When I request a hire using start and end dates
Then I receive successfully hired
