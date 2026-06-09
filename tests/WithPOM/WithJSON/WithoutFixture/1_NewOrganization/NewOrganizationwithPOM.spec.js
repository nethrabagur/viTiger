import { test,expect } from "@playwright/test";
import org_data from '../../test_data/New_Organization.json'
import { organization_loc } from "../../pages/New_Organization.js";
import login_data from '../../test_data/Login.json'
import { login_loc } from "../../pages/Login.js";
import { log_out } from "../../pages/Logout.js";

test.only('NewOrg_POM',async ({page}) => {

    let a= new login_loc(page)
    await a.login_url()
    await a.login_details(login_data["User Name"],login_data.Password)

    let b= new organization_loc(page)
    await b.org_details(org_data)

    let c=new log_out(page)
    await c.logout_details()

})



