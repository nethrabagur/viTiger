import { test } from "@playwright/test";
import { salesorder_loc } from "../../../../../pages/With JSON/New_SalesOrder.js";
//import { salesorder_loc } from "../../pages/New_SalesOrder.js"
import SO_data from '../../../../../test_data/JSON/New_SalesOrder.json'
import { login_loc } from "../../../../../pages/With JSON/Login.js";
//import { login_loc } from "../../pages/Login.js"
//import login_data from '../../test_data/Login.json'
import login_data from '../../../../../test_data/JSON/Login.json'
import {log_out} from '../../../../../pages/With JSON/Logout.js'

//import { log_out, logout } from "../../pages/Logout.js"

test.only('POM_NewSO',async ({page}) => {

    let login=new login_loc(page)
    await login.login_url()
    await login.login_details(login_data)

    let SO= new salesorder_loc(page)
    await SO.SaleOrder_detail(SO_data)

    let LO=new log_out(page)
    await LO.logout_details()
    
})