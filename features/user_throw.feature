Feature: User can throw Rock, Paper or Scissors
    As a user
    In order to play RPS
    I would like to be able to throw a hand of Rock, Paper or Scissors

    Background:
        Given I visit the site

    Scenario: User makes a throw selection
        Then I should see "Choose your weapon!"
        When I click the "Rock"
        Then I should see "Rock!"
        # When I click the "Paper" button
        # Then I should see "Paper!"
        # When I click the "Scissors!" button
        # Then I should see "Scissors!"
