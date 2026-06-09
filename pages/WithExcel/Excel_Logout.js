
export class log_out{
    constructor(page){
        this.page=page;
        this.mouse=page.locator(`//img[@src="themes/softed/images/user.PNG"]`)
        this.signout=page.locator(`//a[@href="index.php?module=Users&action=Logout"]`)
    }

    async logout_details(){
        await this.mouse.hover()
        await this.signout.click()
    }
}