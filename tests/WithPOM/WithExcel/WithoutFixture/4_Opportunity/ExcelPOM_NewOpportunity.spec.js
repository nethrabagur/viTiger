import { test,expect } from "@playwright/test";
import { readExcel } from "../../../../Utility/Excel";
import { login_loc } from "../../../../pages/WithExcel/Excel_Login";
import { log_out } from "../../../../pages/WithExcel/Excel_Logout";
import { Opportunity_loc } from "../../../../pages/WithExcel/Excel_NewOpportunity";

test.only('ExcelPOM_NewOpportunity',async ({page}) => {

    test.slow()
    let login= new login_loc(page)

    let login_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/Login.xlsx','Sheet1')
    await login.login_url('http://localhost:8888//index.php?action=Login&module=Users')
    
    for (let a of login_data){
        await login.login_details(a.user_name,a.user_password)
        await page.waitForLoadState('domcontentloaded')
    }

    let opportunity= new Opportunity_loc(page)
    let opportunity_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewOpportunity.xlsx','Sheet1')

    for (let b of opportunity_data){
        await opportunity.Opportunity_details(b.potentialname,b.related_to_type,b.opportunity_type,b.leadsource,b.assigned_user_id,b.closingdate,b.sales_stage,b.description)
        await page.waitForLoadState('domcontentloaded')
        await page.waitForLoadState('networkidle')
    }
               
    let c=new log_out(page)
    await c.logout_details()

})