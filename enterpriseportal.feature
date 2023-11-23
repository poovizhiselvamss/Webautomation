
Feature: Generate barcode through EP
        Background:
                Given user has launched the "https://testing-enterprise.prenetics.com/"
                And user navigates to login page   
                When user enters the "poovizhi.global" on the username field
                And user enters the "12345678" on the password field
                When user clicks the Sign-In button
                Then user navigates to the enterprise portal page

        Scenario Outline: Verify the user can able generate the barcode
                Given user clicks the operation menu on the enterprise portal
                When user clicks the barcodes menu
                And barcode page is displayed on the screen
                And user clicks the Create button
                And pop-up is displayed on the screen
                And user selects the drop-down under barcode expiration
                And user selects the month under month drop-down
                And user selects the product SKU on the drop-down 
                And user enter the "<Barcode>"
                And user clicks the generate button
                And barcode generated pop-up is displayed on the screen
                And user clicks the exported button on the pop-up
                Then the generated file is downloaded
        Examples:
                |Barcode|
                |1      |
