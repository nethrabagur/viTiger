import { test,expect } from "@playwright/test";
import multiple_login from '../../../test_data/JSON/Login.json'
import new_lead_creation from '../../../test_data/JSON/New_Leads.json'

test('NewLeads_multipleLogin_json',async ({page}) => {
    //! LOGIN to the application
    for(let c of multiple_login){
        await page.goto(c.URL)
        await page.waitForLoadState('load')
        await page.locator(`//input[@name="user_name"]`).fill(c["User Name"])
        await page.locator(`//input[@name="user_password"]`).fill(c.Password)
        await page.locator(`//input[@id="submitButton"]`).click()
        await page.waitForLoadState('load')
        
    //! Navigating to Add Lead Info
    await page.locator(`//a[text()="Leads"]`).nth(0).click()
    await page.getByTitle("Create Lead...").click()

    //! Creating New Lead from JSON
        for (let d of new_lead_creation){
            await page.locator(`//input[@name="firstname"]`).fill(d.firstname)
            await page.locator(`//input[@name="lastname"]`).fill(d.lastname)
            await page.locator(`//input[@name="company"]`).fill(d.company)
            await page.locator(`//select[@name="leadsource"]`).selectOption({value: 'Existing Customer'})
            await page.locator(`//select[@name="industry"]`).selectOption({value: 'Consulting'})
            //await page.locator(`//select[@name="assigned_group_id"]`).selectOption({value: '4'})
            await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).scrollIntoViewIfNeeded()        
            await page.locator(`//textarea[@name="lane"]`).fill(d.lane)
            await page.locator(`//input[@id="pobox"]`).fill(d.pobox)
            await page.locator(`//input[@id="code"]`).fill(d.code)
            await page.locator(`//input[@id="city"]`).fill(d.city)
            await page.locator(`//input[@id="country"]`).fill(d.country)
            await page.locator(`//textarea[@name="description"]`).fill(d.description)
            

            await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).click()        
            console.log("New Lead is Created");
            

        }


       
    
    
       
    
    //! VALIDATE THE ADDED INFO USING ASSERTIONS 
    //! Validating using toBeVisible() with Contains 
    //await expect(page.locator(`//span[contains(@class,"dvHeaderText")]`)).toBeVisible()
    //! Validating using toContainText()
    await expect(page.locator(`//span[@class="dvHeaderText"]`)).toContainText("Lead Information")
    //! Validating using ToBeVisible with ID
    // await expect(page.locator(`[id="mouseArea_First Name"]`)).toBeVisible()
    //!Validating using toHaveValue
    // await expect(page.locator(`//input[@id="hdtxt_Assigned To"]`)).toHaveValue('Support Group')
    
    console.log("Lead is Successfully Created");

    //! Logout Functionality
    await page.locator(`//img[@src="themes/softed/images/user.PNG"]`).hover()
    await page.locator(`//a[text()="Sign Out"]`).click()
    }
})

