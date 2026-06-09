import { test,expect } from "@playwright/test";
import { readExcel } from "../../../../Utility/Excel";
import { login_loc } from "../../../../pages/WithExcel/Excel_Login";
import { log_out } from "../../../../pages/WithExcel/Excel_Logout";
import { product_loc } from "../../../../pages/WithExcel/Excel_NewProduct";

test.only('ExcelPOM_NewProduct',async ({page}) => {

    test.slow()
    let login= new login_loc(page)
    let login_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/Login.xlsx','Sheet1')
    await login.login_url('http://localhost:8888//index.php?action=Login&module=Users')
    
    for (let a of login_data){
        await login.login_details(a.user_name,a.user_password)
        await page.waitForLoadState('domcontentloaded')
    }

    let product=new product_loc(page)
    let product_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewProduct.xlsx','Sheet1')
    
     for(let b of product_data){
        await product.product_details(b.productname,b.manufacturer,b.productcategory,b.glacct,b.unit_price,b.qtyinstock)
        await page.waitForLoadState('domcontentloaded')
        await page.waitForLoadState('networkidle')
    }
           
    let c=new log_out(page)
    await c.logout_details()

})


