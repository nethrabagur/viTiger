import { test,expect } from "@playwright/test";
import { readExcel } from "../../../../Utility/Excel";
import { login_loc } from "../../../../../pages/WithExcel/Excel_Login";
import { log_out } from "../../../../../pages/WithExcel/Excel_Logout";
import { contact_loc } from "../../../../../pages/WithExcel/Excel_NewContacts";


test.only('ExcelPOM_NewContact',async ({page}) => {

    test.slow()
    let login= new login_loc(page)

    let login_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/Login.xlsx','Sheet1')
    await login.login_url('http://localhost:8888//index.php?action=Login&module=Users')
    
    for (let a of login_data){
        await login.login_details(a.user_name,a.user_password)
        await page.waitForLoadState('domcontentloaded')
    }

    let contact=new contact_loc(page)
    let contact_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewContacts.xlsx','Sheet1')

    for(let b of contact_data){
        await contact.contact_details(b.salutationtype,b.firstname,b.lastname,b.leadsource,b.birthday,b.assigned_group_id,b.support_end_date,b.otherstreet,b.description)
        await page.waitForLoadState('domcontentloaded')
        await page.waitForLoadState('networkidle')
    }
           
    let c=new log_out(page)
    await c.logout_details()

})


