import { Given, Then, When } from "@wdio/cucumber-framework";
import { launch } from "../../src/commonutils/utils";
import marketingpage from "../../src/pageobject/marketingpage"


Given(/^User has launched the testing app \"([^\"]*)\"$/, async (httpsstagingenterprisepreneticscom) => {
    await launch(httpsstagingenterprisepreneticscom)
});

Then(/^user is navigated to home page$/, async () => {
    await browser.pause(7000)
});

Given(/^user clicks shop now button$/, async () => {
    await browser.pause(5000)
    await marketingpage.clickToshpnbtb()

});

Then(/^all products are visible on the screen$/, async () => {
    await browser.pause(5000)

}); 

When(/^user clicks our product navbar button$/, async () =>{
    await browser.pause(8000)
    await marketingpage.clickToprmbtb()
});

Then(/^user clicks premium on navbar$/, async () => {
    await browser.pause(8000)
    await marketingpage.clickTopremprd()
}); 

Then(/^it will navigate to pdp page$/, async () => {
    await browser.pause(5000)

});

Then(/^user clicks the Buy now button on pdp page$/, async () => {
    await browser.pause(7000)
    await marketingpage.clickToatcardtb()
}); 

Then(/^user will navigate to cart page$/, async () => {
    await browser.pause(5000)

});

Then(/^user clicks check out now button$/, async () => {
    await browser.pause(5000)
    await marketingpage.clickToincrbtb()
});

Then(/^it will navigate to checkout page$/, async () => {
    await browser.pause(5000)
});

Given(/^user enter the email \"([^\"]*)\"$/, async (email) =>{
    await browser.pause(6000)
    await marketingpage.enteruseremail(email)
});

Then(/^user clicks the continue button the checkout page$/, async () => {
    await browser.pause(5000)
    await marketingpage.clickTocbtb()
});

Then(/^shipping card details tab is opened on the screen$/, async () => {
    await browser.pause(5000)
});

Then(/^the user selects the drop-down values as \"([^\"]*)\"$/, async (country) => {
    await browser.pause(9000)
    await marketingpage.selectcountry(country)
  });

Then(/^the user enters the \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$/, async (firstname, lastname, addressline1, addressline2, city, mobile) => {
    await browser.pause(8000)
    await marketingpage.enterfistname(firstname)
    await marketingpage.enterlasname(lastname)
    await marketingpage.enteraddressfst(addressline1)
    await marketingpage.enteraddresssecd(addressline2)
    /*await marketingpage.districtseltion(district)*/
    await marketingpage.entercity(city)
    await marketingpage.entermno(mobile)
  });

Then(/^user press the continue button$/, async () => {
    await browser.pause(10000)
    await marketingpage.clickTosbtb()
  });

Then(/^the user will navigate to the payment details tab$/, async () => {
    await browser.pause(7000)
  });

  Then(/^the user enters the payment details \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$/, async (cardnumber,expirymonthyear,cvvnumber) => {
    await browser.pause(10000);
    await marketingpage.entercardnumber(cardnumber)
    await marketingpage.enterexprmy(expirymonthyear)
    await marketingpage.entercvvnumber(cvvnumber)
  });

  When(/^the user selects the checkbox on the checkout page$/, async () => {
    await browser.pause(6000)
    await marketingpage.selectcheckboxcp()
  });

  Then(/^the user clicks pay now button$/, async () => {
    await browser.pause(7000)
    await marketingpage.clickpnbtbcp()
  });

  Then(/^the user will navigate to the orderid page$/, async () => {
    await browser.pause(10000)
  });
