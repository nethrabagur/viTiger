import {test as base } from '@playwright/test'
import { login_loc } from '../pages/WithExcel/Excel_Login.js'
import { readExcel } from '../Utility/Excel.js'

export let test=base.extend({
    
    LoginPage: async ({page},use) => {
        let login=new login_loc(page)
        let login_data = await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/Login.xlsx','Sheet1')
        await use ({login,login_data})
    }
})