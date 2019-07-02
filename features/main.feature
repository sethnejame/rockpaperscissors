Feature: Play Rock, Paper, Scissors
    As a user
    In order to have a little fun
    I would like to be able to play Rock, Paper, Scissors through the browser

    Scenario: Play a round of RPS
        Given I visit the site
        Then I should see "Rock, Paper, Scissors!"
        And I should see "Click on the button below to throw down!"
        When I click "Throw Down!"
        Then I should see "You threw Rock!" or "You threw Paper" or "You threw Scissors!"
        And I should see "Your opponent threw Rock!" or "Your opponent threw Paper!" or "Your opponent threw Scissors!"
        And I should see "You win!" or "You lose! Try again."
        And I should see "My Score:" update depending on whether or not I won the game