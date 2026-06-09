import { test } from "@playwright/test";

test('New_Quotation',async ({page}) => {

    //! Login to the Application 
    await page.goto('http://localhost:8888//index.php?action=Login&module=Users')
    await page.waitForLoadState('load')

    await page.locator(`//input[@name="user_name"]`).fill('admin')
    await page.locator(`//input[@name="user_password"]`).fill('admin')
    await page.locator(`//input[@id="submitButton"]`).click()
    await page.waitForLoadState('load')   

    //!Navigate to Quoatation Page
    await page.locator(`//a[text()="More"]`).hover()
    await page.locator(`//a[text()="Quotes"]`).click()
    await page.getByTitle("Create Quote...").click()

    //! Creating a New Quoatation
    await page.locator(`//input[@name="subject"]`).fill('Response to the New Product')
    
    let [page1]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator(`//img[@title="Select"]`).nth(0).click()
    ])
    await page1.locator(`//a[@id="2"]`).click()
    
    let [page2]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator(`//img[@title="Select"]`).nth(1).click()
    ])
    await page2.locator(`//a[@id="2"]`).click()
    
    let [page3]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator(`//img[@title="Select"]`).nth(2).click()
    ])
    await page3.locator(`//a[@id="2"]`).click()

    await page.locator(`//textarea[@name="bill_street"]`).scrollIntoViewIfNeeded()
    await page.locator(`//textarea[@name="bill_street"]`).fill('Billing Address1,Billing Address2,Billing Address3,Billing Address4,Billing Address5')

    await page.locator(`//input[@name="cpy"]`).nth(1).click()
    await page.locator(`//input[@id="productName1"]`).scrollIntoViewIfNeeded()
    
    let [page4]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator(`//img[@id="searchIcon1"]`).click()
    ])
    await page4.locator(`//a[@id="popup_product_79"]`).click()

    await page.locator(`//input[@id="qty1"]`).fill('10')
    await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).click()

    await page.waitForLoadState('load')
    console.log("New Quotation is Created");
    
    
    //! Logout Functionality
    await page.locator(`//img[@src="themes/softed/images/user.PNG"]`).hover()
    await page.locator(`//a[text()="Sign Out"]`).click()    
    
})