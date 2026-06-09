import { test,expect } from "@playwright/test";

test('New_Products_Assertion',async ({page}) => {
    
    //! Login to the Application 
    await page.goto('http://localhost:8888//index.php?action=Login&module=Users')
    await page.waitForLoadState('load')

    await page.locator(`//input[@name="user_name"]`).fill('admin')
    await page.locator(`//input[@name="user_password"]`).fill('admin')
    await page.locator(`//input[@id="submitButton"]`).click()
    await page.waitForLoadState('load')   

    //! Navigating to New Product Page 
    await page.locator(`//a[text()="Products"]`).click()
    await page.waitForLoadState('load')
    
    await page.locator(`//img[@title="Create Product..."]`).click()
    await page.waitForLoadState('load')

    //!Creating New Product
    await page.locator(`//input[@name="productname"]`).fill('New_Product4')
    await page.locator(`//input[@id="productcode"]`).fill('PROD1')
    await page.locator(`//select[@name="manufacturer"]`).selectOption({value: 'MetBeat Corp'})
    await page.locator(`//select[@name="productcategory"]`).selectOption("Software")
    
    await page.locator(`//a[text()="more currencies »"]`).scrollIntoViewIfNeeded()
    await page.locator(`//a[text()="more currencies »"]`).click()
    
    await page.locator(`//input[@id="curname1"]`).fill('100')
    await page.locator(`//img[@src="themes/images/close.gif"]`).nth(2).click()
    await page.locator(`//input[@id="tax3_check"]`).click()
    await page.locator(`//input[@value="T"]`).scrollIntoViewIfNeeded()
    await page.locator(`//input[@value="T"]`).click()
    
    await page.locator(`//select[@name="usageunit"]`).selectOption({value: "Quantity"})
    await page.locator(`//input[@id="qtyinstock"]`).fill('250')
    await page.locator(`//input[@id="my_file_element"]`).setInputFiles("C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/tests/Upload Files/1.txt")
    
    await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).scrollIntoViewIfNeeded()
    await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).click()
    await page.waitForLoadState('load')
    console.log("New Product is Saved");
    

    //! Validating the Newly Created Product using ASSERTION!
    await expect(page.locator(`[id="dtlview_Product Name"]`)).toBeVisible()
    console.log("New Opportunity is Created");
    

    
    //! Logout Functionality
    await page.locator(`//img[@src="themes/softed/images/user.PNG"]`).hover()
    await page.locator(`//a[text()="Sign Out"]`).click()    
})
