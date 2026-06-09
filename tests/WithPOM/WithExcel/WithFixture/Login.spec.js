import { test } from "../../../../fixture/COPY_LoginwithEXCEL";
//import { test } from "../../../../fixture/LoginwithExcel.js";

test('ExcelFixture_Login',async ({LoginPage}) => {
    
    let {login,login_data} = LoginPage

    for (let row of login_data){
        
        await login.login_url(row.URL)
        await login.login_details(
            row.user_name,
            row.user_password
        )
    }
    console.log("Logged in Successfully");
})