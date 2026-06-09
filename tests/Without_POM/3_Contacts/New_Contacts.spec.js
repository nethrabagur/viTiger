import { test } from "@playwright/test";

test('New_Contacts',async ({page}) => {

    
    //!Login Functionality
    await page.goto('http://localhost:8888//index.php?action=Login&module=Users')
    await page.waitForLoadState('load')

    await page.locator(`//input[@name="user_name"]`).fill('admin')
    await page.locator(`//input[@name="user_password"]`).fill('admin')
    await page.locator(`//input[@id="submitButton"]`).click()
    await page.waitForLoadState('load')   

    //!Navigating to Add to Contact Page
    await page.locator(`//a[text()="Contacts"]`).click()
    await page.waitForLoadState('load')
    await page.locator(`//img[@title="Create Contact..."]`).click()
    await page.waitForLoadState('load')
    
    //! Adding New Contact Info
    await page.locator(`//select[@name="salutationtype"]`).selectOption({value: 'Prof.'})
    await page.locator(`//input[@name="firstname"]`).fill('Umesha')
    let FN=await page.locator(`//input[@name="firstname"]`).inputValue()    
    await page.locator(`//input[@name="lastname"]`).fill('BN')
    let LN=await page.locator(`//input[@name="lastname"]`).inputValue() 
    let name1=`${FN},${LN}`
    console.log(name1);
    
    let [page1]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator(`//img[@title="Select"]`).nth(0).click()
    ])
    await page1.locator(`//a[@id="1"]`).click()

    await page.locator(`//input[@name="emailoptout"]`).click()
    await page.locator(`//input[@id="secondaryemail"]`).fill('abc@gmail.com')
    await page.locator(`//input[@id="jscal_field_birthday"]`).fill('2007-12-25') 
    
    let [page2]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator(`//img[@title="Select"]`).nth(1).click()
    ])
    await page2.locator(`//a[@id="1"]`).click()

    await page.locator(`//input[@id="jscal_field_support_start_date"]`).fill('2026-05-14')
    await page.locator(`//input[@id="jscal_field_support_end_date"]`).fill('2027-05-14')
    await page.locator(`//textarea[@name="mailingstreet"]`).scrollIntoViewIfNeeded()
    await page.locator(`//textarea[@name="mailingstreet"]`).fill('Mailing Street1,Mailing Street2,Mailing Street3,Mailing Street4,Mailing Street5')
    await page.locator(`//input[@name="cpy"]`).nth(1).click()
    await page.locator(`//input[@name="imagename"]`).setInputFiles('c:/Users/Prasannamurti Desai/Desktop/IMG_9936.JPG')
    await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).scrollIntoViewIfNeeded()
    await page.locator(`//input[@title="Save [Alt+S]"]`).nth(1).click()
    await page.waitForLoadState('load')

    //! Validating the Crated Contact
    let First_Name=await page.locator(`//span[@id="dtlview_First Name"]`).textContent()
    let Last_Name=await page.locator(`//span[@id="dtlview_Last Name"]`).textContent()
    let name2= `${First_Name},${Last_Name}`
    console.log("Added name displayed is:", name2);
    
    if (name1 == name2) {
        console.log("Contact is Newly Added & Name Matches");
        
    } else {
        console.log("Contact is to be Created");
    }
    
    //! LogOut Functionality
    await page.locator(`//img[@src="themes/softed/images/user.PNG"]`).hover()
    await page.locator(`//a[text()="Sign Out"]`).click()    
})
