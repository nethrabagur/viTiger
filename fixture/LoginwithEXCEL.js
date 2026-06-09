import {test as base } from '@playwright/test'
import { login_loc } from '../pages/WithExcel/Excel_Login.js'
import { readExcel } from '../Utility/Excel.js'

export let test=base.extend({
    
    LoginPage: async ({page},use) => {
        let login=new login_loc(page)
        let login_data = await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/Login.xlsx','Sheet1')
        await use ({login,login_data})
        
        await login.login_url()
        await login.login_details()
        await use(page)
    },
    Contacts: async ({LoginPage},use) => {
            let contact= new contact_loc(LoginPage)
            let contact_data = await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewContacts.xlsx','Sheet1')
            await use({contact,contact_data})
        }
})