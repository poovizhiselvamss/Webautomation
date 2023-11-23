@regression
Feature: Regression flow for marketing site

    Background:
        Given User has launched the testing app "https://staging.circledna.com/"
        And user is navigated to home page

    Scenario Outline: Verify the user can able to purchase the product when we click the pay now button on the checkout page
        Given user clicks shop now button
        And all products are visible on the screen
        And user clicks our product navbar button
        And user clicks premium on navbar
        And it will navigate to pdp page
        And user clicks the Buy now button on pdp page
        And user will navigate to cart page
        And user clicks check out now button
        And it will navigate to checkout page
        And user enter the email "<Email>"
        And user clicks the continue button the checkout page
        And shipping card details tab is opened on the screen
        And the user selects the drop-down values as "<country>"
        And the user enters the "<First Name>" "<LastName>" "<Address Line 1>" "<Address Line 2>" "<city>" "<Mobile>"
        And user press the continue button
        And the user will navigate to the payment details tab
        And the user enters the payment details "<accountnumber>" "<expirydate>" "<CVV>"
        When the user selects the checkbox on the checkout page
        And the user clicks pay now button
        Then the user will navigate to the orderid page


        Examples:
            | Email                  | country   | First Name | LastName | Address Line 1  | Address Line 2 | city      | Mobile   | accountnumber       | expirydate | CVV |
            | selvamss@prenetics.com | Argentina | Poovizhi   | Selvam   | Collector nagar | Attur          | Admiralty | 78980807 | 4242 4242 4242 4242 | 12/24      | 100 |
