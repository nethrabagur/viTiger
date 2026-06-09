import { test } from "@playwright/test";

test('New_Invoice',async ({page}) => {

    //! Login to the Application 
    await page.goto('http://localhost:8888//index.php?action=Login&module=Users')
    await page.waitForLoadState('load')

    await page.locator(`//input[@name="user_name"]`).fill('admin')
    await page.locator(`//input[@name="user_password"]`).fill('admin')
    await page.locator(`//input[@id="submitButton"]`).click()
    await page.waitForLoadState('load')   

    //!Navigate to Invoice Page
    await page.locator(`//a[text()="More"]`).hover()
    await page.locator(`//a[text()="Invoice"]`).click()
    await page.getByTitle("Create Invoice...").click()

    //! Creating a Invoice
    await page.locator(`//input[@name="subject"]`).fill('Response to the SO')
    
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
    await page.locator(`//textarea[@name="bill_street"]`).fill('Billing Address1,Billing Address2,Billing Address3,Billing Address4,Billing Address5')

    await page.locator(`//input[@name="cpy"]`).nth(1).click()
        
    await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).scrollIntoViewIfNeeded()
    await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).click()

    await page.waitForLoadState('load')
    console.log("New Invoice is Created");
    
    //! Logout Functionality
    await page.locator(`//img[@src="themes/softed/images/user.PNG"]`).hover()
    await page.locator(`//a[text()="Sign Out"]`).click()    

    
})