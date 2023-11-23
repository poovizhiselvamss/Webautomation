import { clickelement, setText, selectVisibleText, doubleClick } from "../commonutils/utils"

class marketingpage {
    get shpbtb () { return $("//div//a[contains(text(),'Shop Now')]") }
    get prdbtb() { return $("//div//div//div[contains(text(),'Our Products')]")}
    private get clickpprem () { return $("//div//div[contains(text(),'Premium DNA Test')]")}
    private get clicktoatcb() { return $("(//div//a[contains(text(),'Buy now')])[8]")}
    private get clickincrbtb() { return $("//button//span[contains(text(),'Check out now')]")}
    private get enteremail() { return $( "//div//input[@name='email']")}
    private get clickcbtb() { return $("(//div//button//span[contains(text(),'Continue')])[2]")}
    private get countryselection() { return $("(//div//input[@class='placeholder'])[3]")}
    private get enterfirstname() { return $("//div//input[@id='firstName']")}
    private get enterlastname() { return $("//input[@name='lastName']")}
    private get enteraddress1() { return $("//input[@name='addressLine1']")}
    private get enteraddress2() { return $("//input[@name='addressLine2']")}
    private get entercityname() { return $("//input[@name='city']")}
   /* private get districtselection() {return $("//select[@class='DistrictDropdown']")}*/
    private get mobilenumber() { return $("//input[@name='phone']")}
    private get clicksbtb() { return $("(//button[contains(text(),'Continue')])[2]")}
    /*private get selectradiobtb() { return $("//div[@class='radio-button-option']//img[@alt='Radiobutton - stripe']")}*/
    private get entercardno() { return $("//input[@name='cardNumber']")}
    private get enterexpmy() { return $("//input[@name='expiration']")}
    private get entercvvno() { return $("//input[@name='cvv']")}
    private get selectcheckbox() { return $("//input[@id='tos-check']")}
    private get clickpnbtb() { return $("//button[contains(text(),'Pay Now')]")}

   
    async clickToshpnbtb() {
        await clickelement(this.shpbtb)
    }
    async clickToprmbtb() {
        await this.prdbtb.scrollIntoView();
        await clickelement(this.prdbtb)
        await doubleClick(this.prdbtb);
    }
    async clickTopremprd() {
        await this.clickpprem.scrollIntoView();
        await clickelement(this.clickpprem)
    }
    async clickToatcardtb() {
        await clickelement(this.clicktoatcb)
    }
    async clickToincrbtb() {
        await clickelement(this.clickincrbtb)
    }
    async enteruseremail(mailid: string){
        await setText(this.enteremail,mailid)
    }
    async clickTocbtb() {
        await this.clickcbtb.scrollIntoView();
        await clickelement(this.clickcbtb)
    }
    async selectcountry(country:string){
        await clickelement (this.countryselection)
        //await selectVisibleText (this.countryselection, country)
    }
    async enterfistname(firstname: string) {
        await setText(this.enterfirstname, firstname)
    }
    async enterlasname(firstname: string) {
        await setText(this.enterlastname, firstname)
    }
    async enteraddressfst(addressfst: string) {
        await setText(this.enteraddress1, addressfst)
    }
    async enteraddresssecd(addressfsec: string) {
        await setText(this.enteraddress2, addressfsec)
    }
    /*async districtseltion(district: string) {
        await selectVisibleText(this.districtselection, district)
    }*/
    async entercity(ctyname: string) {
        await setText(this.entercityname, ctyname)
    }
    async entermno(phoneno: string) {
        await setText(this.mobilenumber, phoneno)
    }
    async clickTosbtb() {
        await this.clicksbtb.scrollIntoView();
        await clickelement(this.clicksbtb)
    } 
    async entercardnumber(entercardno: string) {
        await setText(this.entercardno, entercardno)
    } 
    async enterexprmy(enterexpym: string) {
        await setText(this.enterexpmy, enterexpym)
    } 
    async entercvvnumber(entercvvno: string) {
        await setText(this.entercvvno, entercvvno)
    } 
    async selectcheckboxcp() {
        await clickelement(this.selectcheckbox)
    }
    async clickpnbtbcp() {
        await clickelement(this.clickpnbtb)
    }

    //button[@id='global-vital-cta']
    //button[@id='global-premium-cta']
    //button[@id='global-family-planning-cta']
    //button[@id='global-health-cta']
    //div[contains(text(),'Remove')]
    
}
export default new marketingpage()

/* 
Radio button x-path 
//img[@alt='Radiobutton - stripe']
X-path for checkbox
//input[@type='checkbox' and @id = 'tos-check']
X-path for Remove 
//button[contains(text(),'Remove')]
*/

/*button[textSpanContainsPosition(text(),'Remove')]*/


//input[@name='cardNumber']
//input[@name='expiration']
//input[@name='cvv']
//input[@id='tos-check']
//button[contains(text(),'Pay Now')]
//dropdown.selectByVisibleText("Database Testing"); 
