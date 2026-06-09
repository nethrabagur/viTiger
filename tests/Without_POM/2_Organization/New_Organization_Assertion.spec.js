import { test,expect } from "@playwright/test";

test('New_Organization',async ({page}) => {

    //! Login to the Application
    await page.goto('http://localhost:8888//index.php?action=Login&module=Users')
    await page.waitForLoadState('load')
    await page.locator(`//input[@name="user_name"]`).fill('admin')
    await page.locator(`//input[@name="user_password"]`).fill('admin')
    await page.locator(`//input[@id="submitButton"]`).click()
    await page.waitForLoadState('load')
    
    //! Navigating to Add Organization Info
    await page.locator(`//a[text()="Organizations"]`).nth(0).click()
    await page.waitForLoadState('load')

    await page.locator(`//img[@alt="Create Organization..."]`).click()
    await page.waitForLoadState('load')
    
    //! Creating New Organization
    await page.locator(`//input[@name="accountname"]`).fill('Organization19')
    await page.locator(`//select[@name="industry"]`).selectOption({value: 'Engineering'})
    await page.locator(`//input[@name="emailoptout"]`).click()
    await page.locator(`//input[@value="T"]`).click()
    await page.locator(`//select[@name="rating"]`).selectOption({value: 'Active'})
    await page.locator(`//select[@name="accounttype"]`).selectOption({value: 'Investor'})
    await page.locator(`//select[@name="rating"]`).selectOption({value: 'Active'})
    await page.locator(`//input[@name="notify_owner"]`).click()

    await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).scrollIntoViewIfNeeded()
    await page.locator(`//textarea[@class="detailedViewTextBox"]`).nth(0).fill('1234,Address1,address2,address3')
    await page.locator(`//input[@name="cpy"]`).nth(1).click()
    await page.locator(`//textarea[@name="description"]`).fill('Description1')
    await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).scrollIntoViewIfNeeded()

    await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).click()
    console.log("The New Org Details are Saved");
    await page.waitForLoadState('load')

    //! Validate the Added Info with ASSERTION
    
    await expect(page.locator(`//span[@class="dvHeaderText"]`)).toContainText("Organization Information")  
    //await expect (page.locator(`//span[@class="dvHeaderText"]`)).toContainText("Organization Information")
    //await expect (page.locator('#hdtxt_IsAdmin')).toHaveAttribute('value','1')
    //await expect (page.locator(`#hdtxt_IsAdmin`)).toHaveValue("1")
    console.log("ORG is successfully created");
    
    //! Logout Functionality
    await page.locator(`//img[@src="themes/softed/images/user.PNG"]`).hover()
    await page.locator(`//a[text()="Sign Out"]`).click()

})

