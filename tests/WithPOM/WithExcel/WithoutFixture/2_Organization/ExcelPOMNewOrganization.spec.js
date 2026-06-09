import { test,expect } from "@playwright/test";
import { readExcel } from "../../../../Utility/Excel.js";
import { organization_loc } from "../../../../pages/WithExcel/Excel_NewOrganization.js";
import { login_loc } from "../../../../pages/WithExcel/Excel_Login.js";
import { log_out } from "../../../../pages/WithExcel/Excel_Logout.js";


test.only('ExcelPOM_NewOrg',async ({page}) => {

    test.slow()

    let login= new login_loc(page)

    let login_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/Login.xlsx','Sheet1')
    await login.login_url('http://localhost:8888//index.php?action=Login&module=Users')
    
    for (let a of login_data){
        await login.login_details(a.user_name,a.user_password)
        await page.waitForLoadState('domcontentloaded')
    }
    
    let org=new organization_loc(page)
    let org_data= await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewOrganization.xlsx','Sheet1')
            
    for(let b of org_data){
        await org.org_details(b.accountname,b.website,b.industry,b.accounttype,b.assigned_group_id,b.rating,b.bill_street,b.description)
        await page.waitForLoadState('domcontentloaded')
        await page.waitForLoadState('networkidle')
    }
        
    let c=new log_out(page)
    await c.logout_details()
})



