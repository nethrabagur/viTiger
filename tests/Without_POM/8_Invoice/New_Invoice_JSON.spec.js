import { test,expect } from "@playwright/test";
import login_details from '../../test_data/Login.json'
import invoice_details from '../../test_data/New_Invoice.json'

test('New_Invoice_JSON',async ({page}) => {

    //! Login to the Application 

    for(let a of login_details){

        await page.goto(a.URL)
        await page.waitForLoadState('load')
        await page.locator(`//input[@name="user_name"]`).fill(a["User Name"])
        await page.locator(`//input[@name="user_password"]`).fill(a.Password)
        await page.locator(`//input[@id="submitButton"]`).click()
        await page.waitForLoadState('load')
    }
    
    //!Navigate to Invoice Page
    await page.locator(`//a[text()="More"]`).hover()
    await page.locator(`//a[text()="Invoice"]`).click()
    await page.getByTitle("Create Invoice...").click()

    //! Creating a Invoice
    
    for ( let b of invoice_details){
        await page.locator(`//input[@name="subject"]`).fill(b.subject)
            
            let [page1]=await Promise.all([
                page.waitForEvent('popup'),
                page.locator(`//img[@title="Select"]`).nth(0).click()
            ])
            await page1.locator(`//a[@id="1"]`).click()
            
            let [page2]=await Promise.all([
                page.waitForEvent('popup'),
                page.locator(`//img[@title="Select"]`).nth(1).click()
            ])
            await page2.locator(`//a[@id="1"]`).click()
            
            let [page3]=await Promise.all([
                page.waitForEvent('popup'),
                page.locator(`//img[@title="Select"]`).nth(2).click()
            ])
            await page3.locator(`//a[@id="1"]`).click()

            await page.locator(`//textarea[@name="bill_street"]`).scrollIntoViewIfNeeded()
            await page.locator(`//textarea[@name="bill_street"]`).fill(b.bill_street)

            await page.locator(`//input[@name="cpy"]`).nth(1).click()
                
            await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).scrollIntoViewIfNeeded()
            await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).click()

            await page.waitForLoadState('load')
            console.log("New Invoice is Saved");


    }
    
    //! Validating the Created Invoice 
    await expect(page.locator(`//span[@id="dtlview_Subject"]`)).toBeVisible()
    console.log("Invoice is Created");
    
    
    //! Logout Functionality
    await page.locator(`//img[@src="themes/softed/images/user.PNG"]`).hover()
    await page.locator(`//a[text()="Sign Out"]`).click()    

    
})