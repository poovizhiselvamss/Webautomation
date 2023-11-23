import { clickelement, setText } from "../commonutils/utils"

class webprpage {
    private get FName() { return $("//input[@id='firstName']") }
    private get lname() { return $("//input[@id='lastName']") }
    private get useremail() { return $("//input[@id='userEmail']") }
    private get cage() { return $("//input[@id='age']") }
    private get csalary() { return $("//input[@id='salary']") }
    private get ldepartment() { return $("//input[@id='department']") }
    get popsubtb() { return $("//button[contains(text(),'Submit')]") }
    get Webtables() { return $("//span[contains(text(),'Web Tables')]") }
    private get clickwebabtb() { return $("//button[contains(text(),'Add')]") }
    private get TypeTosearch() { return $("//input[@id='searchBox']")}
    
    

    async ClickToWebtb() {
        await clickelement(this.Webtables)
    }
    async ClickToWebaddbtb() {
        await this.clickwebabtb.scrollIntoView();
        await clickelement(this.clickwebabtb)
    }
    async enterfirstname(FName: string) {
        await setText(this.FName, FName)
    }
    async enterlastName(lname: string) {
        await setText(this.lname, lname)
    }
    async enteruseremail(Mailadd: string) {
        await setText(this.useremail, Mailadd)
    }
    async enterage(cage: string) {
        await setText(this.cage, cage)
    }
    async entersalary(csalary: string) {
        await setText(this.csalary, csalary)
    }
    async enterdepartment(ldepartment: string) {
        await setText(this.ldepartment, ldepartment)
    }
    async entersubmitbutton() {
        await clickelement(this.popsubtb)
    }
    async Typetosearch() {
        await clickelement(this.TypeTosearch)
    }

}
export default new webprpage()