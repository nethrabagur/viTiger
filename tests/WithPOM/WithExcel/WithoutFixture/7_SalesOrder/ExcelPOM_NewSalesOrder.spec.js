import { test,expect } from "@playwright/test";
import { readExcel } from "../../../../Utility/Excel";
import { login_loc } from "../../../../../pages/WithExcel/Excel_Login";
import { log_out } from "../../../../../pages/WithExcel/Excel_Logout";
import { salesorder_loc } from "../../../../../pages/WithExcel/Excel_SalesOrder";

test.only('ExcelPOM_NewSalesOrder',async ({page}) => {

    test.slow()
    let login= new login_loc(page)
    let login_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/Login.xlsx','Sheet1')
    await login.login_url('http://localhost:8888//index.php?action=Login&module=Users')
    
    for (let a of login_data){
        await login.login_details(a.user_name,a.user_password)
        await page.waitForLoadState('domcontentloaded')
    }

    let so=new salesorder_loc(page)
    let so_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewSalesOrder.xlsx','Sheet1')

    for(let b of so_data){
        await so.SaleOrder_detail(b.subject,b.carrier,b.sostatus,b.bill_street,b.ship_street)
        await page.waitForLoadState('domcontentloaded')
        await page.waitForLoadState('networkidle')     
    }
          
    let c=new log_out(page)
    await c.logout_details()

})


