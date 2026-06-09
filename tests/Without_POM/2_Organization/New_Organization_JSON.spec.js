import { test,expect } from "@playwright/test";
import login_details from '../../test_data/Login.json'
import org_details from '../../test_data/New_Organization.json'

test('New_Organization_JSON',async ({page}) => {

    for(let a of login_details) {
        await page.goto(a.URL)
        await page.locator(`//input[@name="user_name"]`).fill(a["User Name"])
        await page.locator(`//input[@name="user_password"]`).fill(a.Password)
        await page.locator(`//input[@id="submitButton"]`).click()
        await page.waitForLoadState('load')
        
        //! Navigating to Add Organization Info
        await page.locator(`//a[text()="Organizations"]`).nth(0).click()
        await page.waitForLoadState('load')

        await page.locator(`//img[@alt="Create Organization..."]`).click()
        await page.waitForLoadState('load')
    
        //! Creating New Organization
        for(let b of org_details){
            await page.locator(`//input[@name="accountname"]`).fill(b.accountname)
            await page.locator(`//select[@name="industry"]`).selectOption({value: 'Engineering'})
            await page.locator(`//input[@name="emailoptout"]`).click()
            await page.locator(`//input[@value="T"]`).click()
            await page.locator(`//select[@name="rating"]`).selectOption({value: 'Active'})
            await page.locator(`//select[@name="accounttype"]`).selectOption({value: 'Investor'})
            await page.locator(`//select[@name="rating"]`).selectOption({value: 'Active'})
            await page.locator(`//input[@name="notify_owner"]`).click()

            await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).scrollIntoViewIfNeeded()
            
            await page.locator(`//textarea[@class="detailedViewTextBox"]`).nth(0).fill(b.bill_street)
            await page.locator(`//input[@name="cpy"]`).nth(1).click()
            await page.locator(`//textarea[@name="description"]`).fill(b.description)
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
        }
    }
    
})