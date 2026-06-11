import { test,expect } from "@playwright/test";
import { leads_loc } from '../../../../../pages/WithExcel/Excel_NewLeads.js'
import { login_loc } from "../../../../../pages/WithExcel/Excel_Login.js";
import { log_out } from "../../../../../pages/WithExcel/Excel_Logout.js";
import { readExcel } from "../../../../../Utility/Excel.js";

test('ExcelPOMNewLeads',async ({page}) => {
    test.slow()
    
    let login= new login_loc(page)
    let login_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/Login.xlsx','Sheet1')
    await login.login_url('http://localhost:8888//index.php?action=Login&module=Users')
    
    for (let a of login_data){
        await login.login_details(a.user_name,a.user_password)
        //await page.waitForLoadState('networkidle')
    }

    let lead=new leads_loc(page)
    let leads_data = await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewLeads.xlsx','Sheet1')
    
    for ( let b of leads_data){
        //console.log('Creating Leads ${b+1}');
        
        await lead.leads_details(b.salutationtype,b.firstname,b.lastname,b.company,b.leadsource,b.industry,b.leadstatus,b.lane,b.description)
        await this.page.waitForLoadState('networkidle')
        await this.page.waitForLoadState('domcontentloaded')
        //console.log('Lead ${b+1} is created}');       
    }
    
    let logout=new log_out(page)
    await logout.logout_details()


    


})
