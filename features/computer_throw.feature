Feature: User can play against the computer
    As a user
    In order to compete against another entity
    I would like to be able to play against the computer

    Background:
        Given I visit the site

    Scenario: Computer makes a random throw
        When I click the "Rock"
        Then I should see "Rock!"
        Then I should see "The Computer threw: "
        Then I should see "Rock!" or "Paper!" or "Scissors!"
       
