import { test,expect } from "@playwright/test";

import { contact_loc } from "../../pages/New_Contacts.js";
import contact_data from '../../test_data/New_Contacts.json'
import { login_loc } from "../../pages/Login.js";
import login_data from '../../test_data/Login.json'
import { log_out } from "../../pages/Logout.js";

test.only('POM_NewContact',async ({page}) => {

    let a= new login_loc(page)
    await a.login_url()
    await a.login_details(login_data["User Name"],login_data.Password)

    let b= new contact_loc(page)
    await b.contact_details(contact_data)

    let c=new log_out(page)
    await c.logout_details()
    
})