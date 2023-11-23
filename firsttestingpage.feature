
Feature: Flow for demoqa

        Background:
                Given User has launched the app "https://demoqa.com/"
                And user is navigate to element page
        
        Scenario Outline: Verify the user submit the details with - fullname, email, currentaddress and permanentaddress
                Given user clicks the text box icon
                And the user is navigate to text box page
                When the user enters the details with "<fullname>" "<email>" "<currentaddress>" "<permanentaddress>"
                And the user clicks the submit button
                Then user should in text page with user details are visible
                Examples:
                        | fullname | email                       | currentaddress  | permanentaddress |
                        | poovizhi  | poovizhiselvamss@gmail.com | Collector nagar | salem            |
        
        Scenario: Verify the selected message is displayed when the user clicks home text on the check box page
                Given user clicks the check box icon
                And the user is navigate to check box page
                And the user clicks the home folder
                And the user clicks the maxcheckbox
                And user clicks the mincheckbox
                And user remove the tick mark on the checkbox
               
        Scenario: Verify the Radio button is displayed when the user clicks the radio button icon on the menu items
                Given user clicks the radio menu button
                And user is navigate to radio button page
                And user selects the yes option
                Then output message is visible on the screen
                And if user selects another option as impressive
                Then another output message is visible on the screen   
                   
        

