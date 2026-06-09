import { test } from "@playwright/test";

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
    await page.locator(`//input[@name="potentialname"]`).fill('WR Product')
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
    let opportunity_N=await page.locator(`//span[@id="dtlview_Opportunity Name"]`).textContent()
    
    if (opportunity == opportunity_N) {
        console.log("Opportunity is Created");        
    } else {
        console.log("Please Create an Opportunity");
    }
    
    
    //! Logout Functionality
    await page.locator(`//img[@src="themes/softed/images/user.PNG"]`).hover()
    await page.locator(`//a[text()="Sign Out"]`).click()
    
})