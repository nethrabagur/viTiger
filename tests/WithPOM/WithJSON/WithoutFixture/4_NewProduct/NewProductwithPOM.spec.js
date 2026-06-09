import { test,expect } from "@playwright/test";
import { product_loc } from "../../pages/New_Product.js";
import product_data from '../../test_data/New_Product.json'
import { login_loc } from "../../pages/Login.js"
import login_data from '../../test_data/Login.json'
import { log_out } from "../../pages/Logout.js"

test.only('POM_NewProduct',async ({page}) => {

    let login=new login_loc(page)
    await login.login_url()
    await login.login_details(login_data)

    let productCreate=new product_loc(page)
    await productCreate.product_details(product_data)
    
    let logout=new log_out(page)
    await logout.logout_details()
    
})