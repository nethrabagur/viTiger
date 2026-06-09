import { test,expect } from "@playwright/test";
import { Opportunity_loc } from "../../pages/New_Opportunities.js";
import opportunity_data from '../../test_data/New_Opportunity.json'
import { login_loc } from "../../pages/Login.js";
import login_data from '../../test_data/Login.json'
import { log_out } from "../../pages/Logout.js";

test.only('POM_NewOpportunity',async ({page}) => {

    let log_in=new login_loc(page)
    await log_in.login_url()
    await log_in.login_details(login_data)

    let opportunity=new Opportunity_loc(page)
    await opportunity.Opportunity_details(opportunity_data)

    let out=new log_out(page)
    await out.logout_details()
    
})