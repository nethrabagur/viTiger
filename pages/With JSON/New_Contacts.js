import contact_data from '../../test_data/JSON/New_Contacts.json'
import { expect } from "@playwright/test";
import { selectByText } from '../../Utility/DropDown.js';
import { generateRandomNumber } from '../../Utility/Random_Number.js';

export class contact_loc{
    constructor(page){
        this.page=page;
        this.contact=page.locator(`//a[@href="index.php?module=Contacts&action=index"]`)
        this.assert2=expect(page.locator(`//a[@class="hdrLink"]`))
        this.newContact=page.locator(`//img[@src="themes/softed/images/btnL3Add.gif"]`)
        this.assert3=expect(page.locator(`//span[@class="lvtHeaderText"]`))
        this.salutation_type=page.locator(`//select[@name="salutationtype"]`)
        this.first_name=page.locator(`//input[@name="firstname"]`)
        this.last_Name=page.locator(`//input[@name="lastname"]`)
        this.lead_source=page.locator(`//select[@name="leadsource"]`)
        this.button=page.locator(`//input[@title="Save [Alt+S]"]`).first()
        
        this.assert1=expect(page.locator(`//span[@id="dtlview_Last Name"]`))
    }
    async contact_details(){
        await this.contact.click()
        await this.assert2.toBeVisible()
        await this.newContact.click()
        await this.assert3.toBeVisible()
        await selectByText(this.salutation_type,contact_data.salutationtype)
        let number = generateRandomNumber()
        await this.first_name.fill(contact_data.firstname+number)
        await this.last_Name.fill(contact_data.lastname)
        await selectByText(this.lead_source,contact_data.leadsource)
        await this.button.scrollIntoViewIfNeeded()
        await this.button.click()

        await this.assert1.toBeVisible()
    }
}