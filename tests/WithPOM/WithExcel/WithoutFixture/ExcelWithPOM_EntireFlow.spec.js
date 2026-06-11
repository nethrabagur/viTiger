import { test,expect } from "@playwright/test";
import { readExcel } from "../../../../Utility/Excel.js";
import { login_loc } from "../../../../../pages/WithExcel/Excel_Login.js";
import { leads_loc } from "../../../../../pages/WithExcel/Excel_NewLeads.js";
import { organization_loc } from "../../../../../pages/WithExcel/Excel_NewOrganization.js";
import { contact_loc } from "../../../../../pages/WithExcel/Excel_NewContacts.js";
import { Opportunity_loc } from "../../../../../pages/WithExcel/Excel_NewOpportunity.js";
import { product_loc } from "../../../../../pages/WithExcel/Excel_NewProduct.js";
import { Quotation_loc } from "../../../../../pages/WithExcel/Excel_NewQuotation.js";
import { salesorder_loc } from "../../../../../pages/WithExcel/Excel_SalesOrder.js";
import { Invoice_loc } from "../../../../../pages/WithExcel/excel_Invoice.js";
import { log_out } from "../../../../../pages/WithExcel/Excel_Logout.js";

test.only('ExcelPOM_WithEntireFlow',async ({page}) => {
    test.slow()
    
    let login= new login_loc(page)
    let login_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/Login.xlsx','Sheet1')
    await login.login_url('http://localhost:8888//index.php?action=Login&module=Users')
    
    for (let a of login_data){
        await login.login_details(a.user_name,a.user_password)
        //await page.waitForLoadState('networkidle')
    }

    let lead=new leads_loc(page)
    let leads_data = await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewLeads.xlsx','Sheet3')
    
    for ( let b of leads_data){
        await lead.leads_details(b.salutationtype,b.firstname,b.lastname,b.company,b.leadsource,b.industry,b.leadstatus,b.lane,b.description)
        // await this.page.waitForLoadState('networkidle')
        // await this.page.waitForLoadState('domcontentloaded')
    }
    
    let org=new organization_loc(page)
    let org_data= await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewOrganization.xlsx','Sheet3')
            
    for(let c of org_data){
        await org.org_details(c.accountname,c.website,c.industry,c.accounttype,c.assigned_group_id,c.rating,c.bill_street,c.description)
        await page.waitForLoadState('domcontentloaded')
        await page.waitForLoadState('networkidle')
    }


    let contact=new contact_loc(page)
    let contact_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewContacts.xlsx','Sheet3')

    for(let d of contact_data){
        await contact.contact_details(d.salutationtype,d.firstname,d.lastname,d.leadsource,d.birthday,d.assigned_group_id,d.support_end_date,d.otherstreet,d.description)
        await page.waitForLoadState('domcontentloaded')
        await page.waitForLoadState('networkidle')
    }

    let opportunity= new Opportunity_loc(page)
    let opportunity_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewOpportunity.xlsx','Sheet3')

    for (let e of opportunity_data){
        await opportunity.Opportunity_details(e.potentialname,e.related_to_type,e.opportunity_type,e.leadsource,e.assigned_user_id,e.closingdate,e.sales_stage,e.description)
        await page.waitForLoadState('domcontentloaded')
        await page.waitForLoadState('networkidle')
    }

    let product=new product_loc(page)
    let product_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewProduct.xlsx','Sheet3')
    
     for(let f of product_data){
        await product.product_details(f.productname,f.manufacturer,f.productcategory,f.glacct,f.unit_price,f.qtyinstock)
        await page.waitForLoadState('domcontentloaded')
        await page.waitForLoadState('networkidle')
    }

    let quotation= new Quotation_loc(page)
    let quotation_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewQuotation.xlsx','Sheet3')

    for(let g of quotation_data){
        await quotation.quotation_detail(g.subject,g.quotestage,g.carrier,g.qty1,g.bill_street,g.ship_street)
        await page.waitForLoadState('domcontentloaded')
        await page.waitForLoadState('networkidle')           
    }   

    let so=new salesorder_loc(page)
    let so_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewSalesOrder.xlsx','Sheet3')

    for(let h of so_data){
        await so.SaleOrder_detail(h.subject,h.carrier,h.sostatus,h.bill_street,h.ship_street)
        await page.waitForLoadState('domcontentloaded')
        await page.waitForLoadState('networkidle')     
    }


    let invoice=new Invoice_loc(page)
    let invoice_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewInvoice.xlsx','Sheet3')

    for (let i of invoice_data){
        await invoice.Invoice_details(i.subject,i.bill_street,i.ship_street)
        await page.waitForLoadState('domcontentloaded')
        await page.waitForLoadState('networkidle')
    }

    let logout=new log_out(page)
    await logout.logout_details()

})
