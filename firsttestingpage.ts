import { clickelement, setText } from "../commonutils/utils"

class firsttestingpage {
    private get FullName() { return $("//input[@id='userName']") }
    private get email() { return $("//input[@id='userEmail']") }
    private get currentaddress() { return $("//textarea[@id='currentAddress']") } //div [@id='currentAddress-wrapper']//textarea[@id='currentAddress']
    private get permanentaddress() { return $("//textarea[@id='permanentAddress']") }
    private get submitbutton() { return $("//button[@id='submit']") }
    get elements() { return $("//h5[contains(text(),'Element')]") }
    get textbox() { return $("//span[contains(text(),'Text Box')]") }
    get checkbox() { return $("//span[contains(text(),'Check Box')]") }
    private get clickcheckbox() { return $("//span[@class='rct-checkbox']") }
    private get maxcheckbox() { return $("//button[@aria-label='Expand all' and @title='Expand all' and @type='button']") }
    private get mincheckbox() { return $("//button[@aria-label='Collapse all' and @title='Collapse all' and @type='button']") }
    private get miniarrow() { return $("//button[@aria-label='Toggle' and @title='Toggle' and @type='button']") }
    private get removetickmark() { return $("//span[@class='rct-checkbox']") }
    private get clickradiobutton() { return $("//span[contains(text(),'Radio Button')]") }
    private get selectyob() { return $("//label[contains(text(),'Yes')]") }
    private get selectimop() { return $("//label[contains(text(),'Impressive')]") }
    
    async ClickToElement() {
        await clickelement(this.elements)
    }
    async ClickToTextBox() {
        await clickelement(this.textbox)
    }
    async enterusername(user: string) {
        await setText(this.FullName, user)
    }
    async enteremail(mail: string) {
        await setText(this.email, mail)
    }
    async entercaddress(caddress: string) {
        await setText(this.currentaddress, caddress)
    }
    async enterpaddress(paddress: string) {
        await setText(this.permanentaddress, paddress)
    }
    async clicksubmitbtn() {
        await this.submitbutton.scrollIntoView();
        //await this.submitbutton.waitForDisplayed();
        await clickelement(this.submitbutton)
    }
    async ClickToCheckBox() {
        await clickelement(this.checkbox)
    }
    async ClickToclickcheckbox() {
        await clickelement(this.clickcheckbox)
    }
    async clickTomaxcheckbox() {
        await clickelement(this.maxcheckbox)
    }
    async clickTomincheckbox() {
        await clickelement(this.mincheckbox)
    }
    async clickTominarrow() {
        await clickelement(this.miniarrow)
    }
    async clikcToremovetickmark() {
        await clickelement(this.removetickmark)
    }
    async clikcToRadiobutton() {
        await clickelement(this.clickradiobutton)
    }
    async clikcToyobutton() {
        await clickelement(this.selectyob)
    }
    async clickToimop() {
        await clickelement(this.selectimop)
    }
    
}
export default new firsttestingpage()