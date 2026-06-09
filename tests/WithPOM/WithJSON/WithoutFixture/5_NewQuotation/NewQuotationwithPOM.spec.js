import { test,expect } from "@playwright/test";
import { Quotation_loc } from "../../pages/New_Quotation.js";
import quotation_data from '../../test_data/New_Quotation.json'
import { login_loc } from "../../pages/Login.js";
import login_data from '../../test_data/Login.json'
import { log_out } from "../../pages/Logout.js";

test.only('POM_NewQuotation',async ({page}) => {

    let login= new login_loc(page)
    await login.login_url()
    await login.login_details()

    let quote=new Quotation_loc(page)
    await quote.quotation_detail(quotation_data)

    let logout=new log_out(page)
    await logout.logout_details()
    
})