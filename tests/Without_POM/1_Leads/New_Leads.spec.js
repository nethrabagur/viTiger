import { test,expect } from "@playwright/test";

test('New_Leads',async ({page}) => {
    //! LOGIN to the application
    await page.goto('http://localhost:8888//index.php?action=Login&module=Users')
    await page.waitForLoadState('load')
    await page.locator(`//input[@name="user_name"]`).fill('admin')
    await page.locator(`//input[@name="user_password"]`).fill('admin')
    await page.locator(`//input[@id="submitButton"]`).click()
    await page.waitForLoadState('load')

    //! Navigating to Add Lead Info
    await page.locator(`//a[text()="Leads"]`).nth(1).click()
    await page.getByTitle("Create Lead...").click()

    //! Creating New Lead
    await page.locator(`//select[@name="salutationtype"]`).selectOption({value: 'Mr.'})
    await page.locator(`//input[@name="firstname"]`).fill('Enterprises9')
    //let lead_FN=await page.locator(`//input[@name="firstname"]`).inputValue()
    await page.locator(`//input[@name="lastname"]`).fill('HS')
    //let lead_LN=await page.locator(`//input[@name="lastname"]`).inputValue()
    await page.locator(`//input[@name="company"]`).fill('New Enterprises')
    let Company_Name=await page.locator(`//input[@name="company"]`).inputValue()
    console.log(Company_Name);
    await page.locator(`//select[@name="leadsource"]`).selectOption({value: 'Existing Customer'})
    await page.locator(`//select[@name="industry"]`).selectOption({value: 'Consulting'})
    await page.locator(`//input[@value="T"]`).click()
    await page.locator(`//select[@name="assigned_group_id"]`).selectOption({value: '4'})
    await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).scrollIntoViewIfNeeded()
    await page.locator(`//textarea[@name="lane"]`).fill('Street1,Street2,Street3,Street4,Street5')
    await page.locator(`//input[@id="pobox"]`).fill('560065')
    await page.locator(`//input[@id="code"]`).fill('345678')
    await page.locator(`//input[@id="city"]`).fill('Bergen')
    await page.locator(`//input[@id="country"]`).fill('Norway')
    await page.locator(`//textarea[@name="description"]`).fill('Description1,Description2,Description3,Description4,Description5')
    await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).click()

    //! Validate the Added Info
    let Comp_Name=await page.locator(`//span[@id="dtlview_Company"]`).textContent()
    console.log(Comp_Name);
    if (Company_Name == Comp_Name) {
        console.log("Lead is Successfully Created");        
    } else {
        console.log("Please create Lead ");
    }
    
    //! Logout Functionality
    await page.locator(`//img[@src="themes/softed/images/user.PNG"]`).hover()
    await page.locator(`//a[text()="Sign Out"]`).click()
    
})

