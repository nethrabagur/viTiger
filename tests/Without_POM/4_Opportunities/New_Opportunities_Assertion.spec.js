import { test,expect } from "@playwright/test";

test('New_Opprtunities',async ({page}) => {

    //! LOGIN to the application
    await page.goto('http://localhost:8888//index.php?action=Login&module=Users')
    await page.waitForLoadState('load')
    await page.locator(`//input[@name="user_name"]`).fill('admin')
    await page.locator(`//input[@name="user_password"]`).fill('admin')
    await page.locator(`//input[@id="submitButton"]`).click()
    await page.waitForLoadState('load')

    //! Navigating to Opportinities Page:
    await page.locator(`//a[text()="Opportunities"]`).nth(0).click()
    await page.waitForLoadState('load')
    await page.locator(`//img[@alt="Create Opportunity..."]`).click()
    await page.waitForLoadState('load')


    //! Creating New Opportunity
    await page.locator(`//input[@name="potentialname"]`).fill('UR Product')
    let opportunity=await page.locator(`//input[@name="potentialname"]`).inputValue()
    
    let [page1]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator(`//img[@title="Select"]`).nth(0).click()
    ])
    
    await page1.locator(`//a[@id="3"]`).click()

    await page.locator(`//select[@name="opportunity_type"]`).selectOption({value: 'Existing Business'})
    await page.locator(`//input[@value="U"]`).click()
    
    let [page2]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator(`//img[@title="Select"]`).nth(1).click()
    ])
    await page2.locator(`//a[@id="1"]`).click()
    
    await page.locator(`//input[@id="jscal_field_closingdate"]`).fill('2027-05-14')
    await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).scrollIntoViewIfNeeded()
    await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).click()
    await page.waitForLoadState('load')
    console.log("New Opportunity is Saved");
    
    //! Validating the Newly created Opportunity with Assertion
    await expect(page.locator(`[id="dtlview_Opportunity Name"]`)).toBeVisible()
    console.log("New Opportunity is Created ");
        
    //! Logout Functionality
    await page.locator(`//img[@src="themes/softed/images/user.PNG"]`).hover()
    await page.locator(`//a[text()="Sign Out"]`).click()
    
})