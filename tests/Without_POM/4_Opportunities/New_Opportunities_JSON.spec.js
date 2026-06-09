import { test,expect } from "@playwright/test";
import login_details from '../../test_data/Login.json'
import oppor_details from '../../test_data/New_Opportunity.json'


test('New_Opprtunities_JSON',async ({page}) => {

    //! LOGIN to the application
    for(let a of login_details){
        await page.goto(a.URL)
        await page.waitForLoadState('load')
        await page.locator(`//input[@name="user_name"]`).fill(a["User Name"])
        await page.locator(`//input[@name="user_password"]`).fill(a.Password)
        await page.locator(`//input[@id="submitButton"]`).click()
        await page.waitForLoadState('load')

    }
        await page.locator(`//a[text()="Opportunities"]`).nth(0).click()
        await page.waitForLoadState('load')
            
        //! Navigating to Opportinities Page:
        for( let b of oppor_details){
            await page.locator(`//img[@alt="Create Opportunity..."]`).click()
            await page.waitForLoadState('load')

        //! Creating New Opportunity
        
        
            await page.locator(`//input[@name="potentialname"]`).fill(b.potentialname)
               
            let [page1]=await Promise.all([
                page.waitForEvent('popup'),
                page.locator(`//img[@title="Select"]`).nth(0).click()
            ])
            await page1.locator(`//a[@id="3"]`).click()

            await page.locator(`//select[@name="opportunity_type"]`).selectOption({value: 'Existing Business'})
            //await page.locator(`//input[@value="U"]`).click()
            
            let [page2]=await Promise.all([
                page.waitForEvent('popup'),
                page.locator(`//img[@title="Select"]`).nth(1).click()
            ])
            await page2.locator(`//a[@id="1"]`).click()
            
            await page.locator(`//input[@id="jscal_field_closingdate"]`).fill(b.closingdate)
            await page.locator(`//textarea[@name="description"]`).fill(b.description)
            await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).scrollIntoViewIfNeeded()
            await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).click()
            await page.waitForLoadState('load')
            console.log("New Opportunity is Saved");
            
            //! Validating the Newly created Opportunity with Assertion
            await expect(page.locator(`[id="dtlview_Opportunity Name"]`)).toBeVisible()
            console.log("New Opportunity is Created ");
        
    }       
            //! Logout Functionality
            await page.locator(`//img[@src="themes/softed/images/user.PNG"]`).hover()
            await page.locator(`//a[text()="Sign Out"]`).click() 
          
})