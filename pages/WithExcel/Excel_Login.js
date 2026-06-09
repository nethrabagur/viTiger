import { expect } from "@playwright/test";

export class login_loc{
    constructor(page){
        this.page=page;
        this.username=page.locator(`//input[@name="user_name"]`)
        this.password=page.locator(`//input[@name="user_password"]`)
        this.button=page.locator(`//input[@id="submitButton"]`)
        this.home_url='http://localhost:8888//index.php?action=index&module=Home'
    }

    async login_url(URL){
         await this.page.goto(this.home_url)
    }
    
    async login_details(user_name,user_password){
        
        await this.username.fill(user_name)
        await this.password.fill(user_password)
        await this.button.click()
        
        //await expect(this.page).toHaveURL(this.home_url)
    }
}