import { test,expect } from "@playwright/test";
import login_details from '../../test_data/Login.json'
import order_details from '../../test_data/New_SalesOrder.json'


test('New_SO_JSON',async ({page}) => {
    
    //! Login to the Application 
    for( let a of login_details){
        await page.goto(a.URL)
        await page.waitForLoadState('load')
        await page.locator(`//input[@name="user_name"]`).fill(a["User Name"])
        await page.locator(`//input[@name="user_password"]`).fill(a.Password)
        await page.locator(`//input[@id="submitButton"]`).click()
        await page.waitForLoadState('load')
    }

    
    //!Navigate to Sales Order Page
    await page.locator(`//a[text()="More"]`).hover()
    await page.locator(`//a[text()="Sales Order"]`).click()
    await page.getByTitle("Create Sales Order...").click()

    //! Creating a New Sales Order
        for (let b of order_details) {
            await page.locator(`//input[@name="subject"]`).fill(b.subject)
        
        let [page1]=await Promise.all([
            page.waitForEvent('popup'),
            page.locator(`//img[@title="Select"]`).nth(0).click()
        ])
        await page1.locator(`//a[@id="1"]`).click()
        
        let [page3]=await Promise.all([
            page.waitForEvent('popup'),
            page.locator(`//img[@title="Select"]`).nth(2).click()
        ])
        await page3.locator(`//a[@id="1"]`).click()

        await page.locator(`//textarea[@name="bill_street"]`).scrollIntoViewIfNeeded()
        await page.locator(`//textarea[@name="bill_street"]`).fill(b.bill_street)

        await page.locator(`//input[@name="cpy"]`).nth(1).click()
        await page.locator(`//input[@id="productName1"]`).scrollIntoViewIfNeeded()
        
        let [page4]=await Promise.all([
            page.waitForEvent('popup'),
            page.locator(`//img[@title="Products"]`).click()
        ])
        
        await page4.locator(`//a[@id="popup_product_79"]`).click()

        await page.locator(`//input[@id="qty1"]`).fill(b.qty1)
        
        await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).scrollIntoViewIfNeeded()
        await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).click()
        await page.waitForLoadState('load')
        console.log("New SalesOrder is Saved");
        //! Validating the Sales Order Created  using assertion
        await expect(page.locator(`//span[@id="dtlview_Subject"]`)).toBeVisible()
        console.log("New Sales Order is Created");
    }
     
    //! Logout Functionality
    await page.locator(`//img[@src="themes/softed/images/user.PNG"]`).hover()
    await page.locator(`//a[text()="Sign Out"]`).click()    

    
})