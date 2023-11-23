Feature: Create the account for Circleapp

    Scenario Outline: Create the circleapp account
        When customer clicks create Account button
        Then customer navigates to the location page
        When customer selects the location
        And customer clicks the confirm button
        Then customer navigates to the create account screen
        When customer enters the <Email> on the email field
        And customer clicks the Get Code button
        Then verification code field is enabled
        When customer enters the <Verification Code>
        And customer clicks the next button
        Then customer navigates to the create a account password screen
        When customer enters the <Password> and <Confirm password>
        And customer selects the check box
        And customer clicks the create account page
        Then customer navigates to the dashboard screen

        Examples:
            | Email                    | Verification Code | Password   | Confirm Password |
            | poovizhi.s@prenetics.com | 1012              | P00vizhis@ | P00vizhis@       |


