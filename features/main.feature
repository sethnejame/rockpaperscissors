Feature: User can throw Rock, Paper or Scissors
    As a user
    In order to play RPS
    I would like to be able to throw a hand of Rock, Paper or Scissors

    Background:
        Given I visit the site

    Scenario: User makes a throw selection
        Then I should see "Choose your weapon!"
        When I click "Rock!" or "Paper!" or "Scissors!"
        Then I should see "You threw Rock!" or "You threw Paper" or "You threw Scissors!"
        And I should see "Your opponent threw Rock!" or "Your opponent threw Paper!" or "Your opponent threw Scissors!"
  