Feature: Create contacts
    As a user
    In order to have a little fun
    I would like to be able to play Rock, Paper, Scissors through the browser

    Scenario: Play a round of RPS
        Given I visit the site
        Then I should see "Rock, Paper, Scissors!"
        And I should see "Click on the button below to throw down!"