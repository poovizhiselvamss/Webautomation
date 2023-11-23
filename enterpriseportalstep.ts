import { Given, Then, When } from "@wdio/cucumber-framework";
import { launch } from "../../src/commonutils/utils";
import enterpriseportalpage from "../../src/pageobject/enterpriseportalpage"

Given(/^user has launched the \"([^\"]*)\"$/, async (httpstestingenterprisepreneticscom) => {
    await launch(httpstestingenterprisepreneticscom)
});

When(/^user navigates to login page$/, async()=> {
    await browser.pause(4000);
});

When(/^user enters the \"([^\"]*)\" on the username field$/, async (username)=> {
    await browser.pause(3000);
    await enterpriseportalpage.enterusername(username)
});

When(/^user enters the \"([^\"]*)\" on the password field$/,  async (password)=> {
    await browser.pause(3000);
    await enterpriseportalpage.enterpasswd(password)
});

When(/^user clicks the Sign-In button$/,  async ()=> {
    await browser.pause(3000);
    await enterpriseportalpage.clicksigninbtb()
});

Then(/^user navigates to the enterprise portal page$/,  async ()=> {
    await browser.pause(3000);
});

Given(/^user clicks the operation menu on the enterprise portal$/, async ()=> {
    await browser.pause(2000);
    await enterpriseportalpage.clickoperationbtb()
});

When(/^user clicks the barcodes menu$/, async ()=> {
    await browser.pause(2000);
    await enterpriseportalpage.clickbrcodebtb()
});

When(/^barcode page is displayed on the screen$/, async ()=> {
    await browser.pause(2000);
});

When(/^user clicks the Create button$/, async ()=> {
    await browser.pause(2000);
    await enterpriseportalpage.clickcrbtb()
});

When(/^pop-up is displayed on the screen$/,  async ()=> {
    await browser.pause(3000);
});

When (/^user selects the drop-down under barcode expiration$/, async ()=> {
    await browser.pause(5000);
    await enterpriseportalpage.selectdob();
});

When (/^user selects the month under month drop-down$/, async ()=> {
    await browser.pause(1000);
    await enterpriseportalpage.selectmonth();
});

When(/^user selects the product SKU on the drop-down$/, async ()=> {
    await browser.pause(1000);
    await enterpriseportalpage.selectsku();
});

When (/^user enter the \"([^\"]*)\"$/, async (barcode)=> {
    await enterpriseportalpage.enternocode(barcode)
});

When(/^user clicks the generate button$/,  async ()=> {
    await enterpriseportalpage.clickgeneratecbtb()
});

When(/^barcode generated pop-up is displayed on the screen$/, async ()=> {
    await browser.pause(2000);
});

When(/^user clicks the exported button on the pop-up$/, async ()=> {
    await enterpriseportalpage.clickexpbtb()
});

Then(/^the generated file is downloaded$/, async ()=> {
    await browser.pause(2000);
});

