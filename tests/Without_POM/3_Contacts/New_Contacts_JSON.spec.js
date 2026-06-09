import { test,expect } from "@playwright/test";
import login_details from '../../test_data/Login.json'
import contact_details from '../../test_data/New_Contacts.json'

test('New_Contacts_JSON',async ({page}) => {
     //!Login Functionality
    for (let a of login_details){
        await page.goto(a.URL)
        await page.waitForLoadState('load')
        await page.locator(`//input[@name="user_name"]`).fill(a["User Name"])
        await page.locator(`//input[@name="user_password"]`).fill(a.Password)
        await page.locator(`//input[@id="submitButton"]`).click()
        await page.waitForLoadState('load')
        
        //!Navigating to Add to Contact Page
        await page.locator(`//a[text()="Contacts"]`).click()
        await page.waitForLoadState('load')
        await page.locator(`//img[@title="Create Contact..."]`).click()
        await page.waitForLoadState('load')
    
        //! Adding New Contact Info
        for(let b of contact_details){
            await page.locator(`//select[@name="salutationtype"]`).selectOption({value: 'Prof.'})
            await page.locator(`//input[@name="firstname"]`).fill(b.firstname)
            await page.locator(`//input[@name="lastname"]`).fill(b.lastname)
            let [page1]=await Promise.all([
                page.waitForEvent('popup'),
                page.locator(`//img[@title="Select"]`).nth(0).click()
            ])
            await page1.locator(`//a[@id="1"]`).click()

            await page.locator(`//input[@name="emailoptout"]`).click()
            await page.locator(`//input[@id="secondaryemail"]`).fill(b.secondaryemail)
            await page.locator(`//input[@id="jscal_field_birthday"]`).fill(b.birthday)
            
            let [page2]=await Promise.all([
            page.waitForEvent('popup'),
            page.locator(`//img[@title="Select"]`).nth(1).click()
            ])
            await page2.locator(`//a[@id="1"]`).click()
            
            await page.locator(`//input[@id="jscal_field_support_start_date"]`).fill(b.support_start_date)
            await page.locator(`//input[@id="jscal_field_support_end_date"]`).fill(b.support_end_date)
            await page.locator(`//textarea[@name="mailingstreet"]`).scrollIntoViewIfNeeded()
            
            await page.locator(`//textarea[@name="mailingstreet"]`).fill(b.mailingstreet)
            await page.locator(`//input[@name="cpy"]`).nth(1).click()
            await page.locator(`//input[@name="imagename"]`).setInputFiles('c:/Users/Prasannamurti Desai/Desktop/IMG_9936.JPG')
            await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).scrollIntoViewIfNeeded()
            await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).click()

            console.log("Contact is Saved");
            await page.waitForLoadState('load')

            //!Validating the created Contact with Assertions 
            await expect(page.locator(`//span[@class="dvHeaderText"]`)).toContainText("Contact Information")
            console.log("Contact is Created");
    
            //! LogOut Functionality
            await page.locator(`//img[@src="themes/softed/images/user.PNG"]`).hover()
            await page.locator(`//a[text()="Sign Out"]`).click()    
    
        }
    }
    
})
