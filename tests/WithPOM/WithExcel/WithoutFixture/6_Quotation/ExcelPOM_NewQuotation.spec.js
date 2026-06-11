import { test,expect } from "@playwright/test";
import { readExcel } from "../../../../../Utility/Excel.js";
import { login_loc } from "../../../../../pages/WithExcel/Excel_Login";
import { log_out } from "../../../../../pages/WithExcel/Excel_Logout";
import { Quotation_loc } from "../../../../../pages/WithExcel/Excel_NewQuotation";

test.only('ExcelPOM_NewQuotation',async ({page}) => {

    test.slow()
    let login= new login_loc(page)
    let login_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/Login.xlsx','Sheet1')
    await login.login_url('http://localhost:8888//index.php?action=Login&module=Users')
    
    for (let a of login_data){
        await login.login_details(a.user_name,a.user_password)
        await page.waitForLoadState('domcontentloaded')
    }

    let quotation= new Quotation_loc(page)
    let quotation_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewQuotation.xlsx','Sheet1')

    for(let b of quotation_data){
        await quotation.quotation_detail(b.subject,b.quotestage,b.carrier,b.qty1,b.bill_street,b.ship_street)
        await page.waitForLoadState('domcontentloaded')
        await page.waitForLoadState('networkidle')           
    }   
          
    let c=new log_out(page)
    await c.logout_details()

})


