import { Given, Then } from "@cucumber/cucumber";
import { When } from "@wdio/cucumber-framework";
import webprpage from "../../src/pageobject/webprpage"

Given(/^user clicks the webtables icon$/, async () => {
    await browser.pause(3000)
    await webprpage.ClickToWebtb()
});

Then(/^the user is navigate to webtables page$/, async () => {
    await browser.pause(3000)
});

Then(/^user clicks the add button$/, async () => {
    await browser.pause(3000)
    await webprpage.ClickToWebaddbtb()
});

Then(/^pop-up message is visible on the screen$/, async () => {
    await browser.pause(8000)
});

When(/^the user enters the personal details with \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$/, async (fullname, lastname, email, age, salary, department) => {
    await browser.pause(8000)
    await webprpage.enterfirstname(fullname)
    await webprpage.enterlastName(lastname)
    await webprpage.enteruseremail(email)
    await webprpage.enterage(age)
    await webprpage.entersalary(salary)
    await webprpage.enterdepartment(department)
});

Then(/^the user clicks the pop-up submit button$/, async () => {
    await browser.pause(8000)
    await webprpage.entersubmitbutton()
});

Then(/^output message is displayed on the screen$/, async () => {
    await browser.pause(5000)
});

Then(/^search the details on the search field$/, async () => {
    await browser.pause(8000)
});

Then(/^the respective data only visible on the screen$/, async () => {
    await browser.pause(8000)
    await webprpage.Typetosearch()
});
