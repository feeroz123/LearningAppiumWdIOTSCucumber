Feature: Home page UI

  Scenario: Verify the buttons present on the home page
    Given I am on the home page
    Then I should see the 'Rent Equipment' button in the home page
    Then I should see the 'Explore T3' button in the home page

  Scenario: Verify that the Sign In button is available under the User icon button
    Given I am on the home page
    When I click on the 'User Icon' button in the home page
    Then I should see the 'Sign In' button in the home page

  Scenario: Verify that the user is able to navagiate to the Login page
    Given I am on the home page
    When I click on the 'User Icon' button in the home page
    And I click on the 'Sign In' button in the home page
    Then I should be navigated to the login page
