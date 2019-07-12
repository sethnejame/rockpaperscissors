Feature: User can keep score
    As a user
    In order to keep track of my progress
    I would like to keep score

    Background:
        Given I visit the site

    Scenario: User scores a point
        When I click the "Rock"
        Then I should see "Rock!"
        Then I should see "Computer threw Scissors"
        Then I should see "My score: 1"
        Then I should see "Computer score: 0"

    Scenario: Computer scores a point
        When I click the "Rock"
        Then I should see "Rock!"
        Then I should see "Computer threw Paper"
        Then I should see "My score: 0"
        Then I should see "Computer score: 1"
       
