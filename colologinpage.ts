import { clickelement, setText } from "../commonutils/utils"

class Colologinpage {
    private get email() 
    { 
        return $("//input[@name='email']") 
    }
    private get password() { return $("//input[@name='password']") }
    private get loginbutton() { return $("//button[@type='submit']") }
    private get emailerror() { return $("//span[normalize-space()='Please enter a valid email']") }
    private get pwderror() { return $("//span[normalize-space()='Incorrect credentials']") }
    private get forgotlink() { return $("//span[text()='Forgot Password']") }


    async getemailerror() {
        return await this.emailerror.getText()
    }
    async getpwderror() {
        return await this.pwderror.getText()
    }
    async enteremail(mail: string) {
        await setText(this.email, mail)
    }
    async enterpassword(pass: string) {
        await setText(this.password, pass)
    }
    async clickloginbtn() {
        await clickelement(this.loginbutton)
    }
    async clickforgotlink() {
        await clickelement(this.forgotlink)
    }
}
export default new Colologinpage()
