import { clickelement, randomIntFromInterval, selectbyindex, selectbyvalue, setText } from "../commonutils/utils"

class enterpriseportalpage {
  /*  private get enterpd() {
        return $("//div//input[@class='input']")
    }
    private get clicksubmit() {
        return $("//div//button[@type='submit']")
    } */
    private get enterun() {
        return $("//div//input[@name='username']")
    }
    private get enterpwd() {
        return $("//div//input[@name='password']")
    }
    private get clicksign() {
        return $("//button[@type='button']")
    }
    private get clickopbtb() {
        return $("//div//div[contains(text(),'Operations')]")
    }
    private get clickbarcodebtb() {
        return $("//div//div//a[contains(text(),'Barcodes')]")
    }
    private get clickcreatebtb() {
        return $("(//button[@type='button'])[4]")
    }
    private get dropdown() {
        return $("//div//select[@name='year']")
    }
    private get selectdropdown() {
        return $("//div//select[@name='month']")
    }
    private get selectprdsku() {
        return $("//div//select[@name='product']")
    }
    private get enternoofbrcode() {
        return $("//div//input[@name='quantity']")
    }
    private get clicksgeneratebutton() {
        return $("//div//button[contains(text(),'Generate')]")
    }
    private get clickexprtbutton() {
        return $("//div//button[contains(text(),'Export Barcodes')]")
    }

   /* async enterpassword(enterpd: string) {
        await setText(this.enterpd, enterpd)
    }
    async clicklogincbtb() {
        await clickelement(this.clicksubmit)
    }*/
    async enterusername(enterun: string) {
        await setText(this.enterun, enterun)
    }
    async enterpasswd(enterpwd: string) {
        await setText(this.enterpwd, enterpwd)
    }
    async clicksigninbtb() {
        await clickelement(this.clicksign)
    }
    async clickoperationbtb() {
        await clickelement(this.clickopbtb)
    }
    async clickbrcodebtb() {
        await clickelement(this.clickbarcodebtb)
    }
    async clickcrbtb() {
        await clickelement(this.clickcreatebtb)
    }
    async selectdob() {
        let year = randomIntFromInterval(6, 5)
        await selectbyindex(this.dropdown, year);
    }
    async selectmonth() {
        await selectbyvalue(this.selectdropdown, "12");
        await this.selectdropdown.click();
    }
    async selectsku() {
        await selectbyvalue(this.selectprdsku, "global-premium");
        await this.selectprdsku.click();
    }
    async enternocode(enternoofbrcode: string) {
        await this.enternoofbrcode.scrollIntoView();
        await setText(this.enternoofbrcode, enternoofbrcode)
    }
    async clickgeneratecbtb() {
        await clickelement(this.clicksgeneratebutton)
    }
    async clickexpbtb() {
        await clickelement(this.clickexprtbutton)
    }
}
export default new enterpriseportalpage()


//And user navigates to credentials page  
//When user enters "prenetics" on staging 
//And user clicks the login button
    
/*Then (/^user navigates to credentials page$/, async()=>{
    await browser.pause(2000);
});
            
When(/^user enters \"([^\"]*)\" on staging$/, async (password) =>{
    await browser.pause(2000);
    await enterpriseportalpage.enterpassword(password)
});


When(/^user clicks the login button$/, async ()=>{
    await browser.pause(3000);
    await enterpriseportalpage.clicklogincbtb()
});    */
    
    
       