import { clickelement, setText } from "../commonutils/utils"

class createaccountpage {
    private get createaccount() 
    { return $("//android.view.ViewGroup[@content-desc='Create Account']/android.view.ViewGroup") }

    async ClickToElement() {
        await clickelement(this.createaccount)
    }

}
export default new createaccountpage()
