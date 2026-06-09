import login_data from '../../test_data/JSON/Login.json'

export class login_loc{
    constructor(page){
        this.page=page;
        this.username=page.locator(`//input[@name="user_name"]`)
        this.password=page.locator(`//input[@name="user_password"]`)
        this.button=page.locator(`//input[@id="submitButton"]`)
    }

    async login_url(){
        await this.page.goto(login_data.URL)
    }
    async login_details(user_name,password){
        await this.username.fill(login_data['User Name'])
        await this.password.fill(login_data.Password)
        await this.button.click()
    }
}