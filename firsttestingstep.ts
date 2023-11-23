import { Given, Then } from "@cucumber/cucumber";
import { launch } from "../../src/commonutils/utils";
import firsttestingpage from "../../src/pageobject/firsttestingpage";


Given(/^User has launched the app \"([^\"]*)\"$/, async (httpsdemoqacom) => {
    await launch(httpsdemoqacom)
});

Then(/^user is navigate to element page$/, async () => {
    await browser.pause(3000)
    await firsttestingpage.ClickToElement()

});

Given(/^user clicks the text box icon$/, async () => {
    await browser.pause(3000)
    await firsttestingpage.ClickToTextBox()
});

Then(/^the user is navigate to text box page$/, async () => {
    await browser.pause(8000)
});

Given(/^the user enters the details with \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$/, async (fullname, email, currentaddress, permanentaddress) => {
    await browser.pause(8000)
    await firsttestingpage.enterusername(fullname)
    await firsttestingpage.enteremail(email)
    await firsttestingpage.entercaddress(currentaddress)
    await firsttestingpage.enterpaddress(permanentaddress)
});

Given(/^the user clicks the submit button$/, async () => {
    await browser.pause(5000)
    await firsttestingpage.clicksubmitbtn()
});

Then(/^user should in text page with user details are visible$/, async () => {
    await browser.pause(8000)
    expect(await browser.getUrl()).toEqual("https://demoqa.com/text-box")
});

Given(/^user clicks the check box icon$/, async () => {
    await browser.pause(3000)
    await firsttestingpage.ClickToCheckBox()
});

Then(/^the user is navigate to check box page$/, async () => {
    await browser.pause(3000)
});

Then(/^the user clicks the home folder$/, async () => {
    await browser.pause(3000)
    await firsttestingpage.ClickToclickcheckbox()
});

Then(/^the user clicks the maxcheckbox$/, async () => {
    await browser.pause(3000)
    await firsttestingpage.clickTomaxcheckbox()
});
Then(/^user clicks the mincheckbox$/, async () => {
    await browser.pause(2000)
    await firsttestingpage.clickTomincheckbox()
});
Then(/^user remove the tick mark on the checkbox$/, async () => {
    await browser.pause(3000)
    await firsttestingpage.clikcToremovetickmark()
});
Given(/^user clicks the radio menu button$/, async () => {
    await browser.pause(5000)
    await firsttestingpage.clikcToRadiobutton()
});
Then(/^user is navigate to radio button page$/, async () => {
    await browser.pause(5000)
});
Then(/^user selects the yes option$/, async () => {
    await browser.pause(3000)
    await firsttestingpage.clikcToyobutton()
});
Then(/^output message is visible on the screen$/, async () => {
    await browser.pause(3000)
});
Then(/^if user selects another option as impressive$/, async () => {
    await browser.pause(3000)
    await firsttestingpage.clickToimop()
});
Then(/^another output message is visible on the screen$/, async () => {
    await browser.pause(3000)
});

