
Feature: webproperties table flow

        Background:
                Given User has launched the app "https://demoqa.com/"
                And user is navigate to element page
                
Scenario: Verify the pop-up output message is dispalyed on the screen when the user clicks submit button 
                Given user clicks the webtables icon
                And the user is navigate to webtables page
                And user clicks the add button 
                And pop-up message is visible on the screen
                And the user enters the personal details with "poovizhi" "selvam" "poovizhiselvamss@gmail.com" "20" "100000" "computerscience"
                And the user clicks the pop-up submit button
                Then output message is displayed on the screen           
                And search the details on the search field
                Then the respective data only visible on the screen
                