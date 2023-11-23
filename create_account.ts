import { Step } from '../steps/step';
import createaccountpage from "../../src/pageobject/createaccountpage";

Step(/^customer clicks create Account button$/, async () => {
    await createaccountpage.ClickToElement()
});



/*//Locating the element
const userElement = await driver.findElement(By.xpath("[@content-desc='Create Account']"))*/