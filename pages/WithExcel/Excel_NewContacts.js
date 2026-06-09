import { expect } from "@playwright/test";
import { selectByText } from '../../Utility/DropDown.js';
import { generateRandomNumber } from '../../Utility/Random_Number.js';
import { switchToPopup } from "../../Utility/Window_Handling.js";

export class contact_loc{
    constructor(page){
        this.page=page;
        this.contact=page.locator(`//a[@href="index.php?module=Contacts&action=index"]`)
        this.assert2=page.locator(`//a[@class="hdrLink"]`)

        this.newContact=page.locator(`//img[@src="themes/softed/images/btnL3Add.gif"]`)
        this.assert3=page.locator(`//span[@class="lvtHeaderText"]`)

        this.salutation_type=page.locator(`//select[@name="salutationtype"]`)
        this.first_name=page.locator(`//input[@name="firstname"]`)
        this.last_Name=page.locator(`//input[@name="lastname"]`)
        this.organization_popup=page.locator(`//img[@src="themes/softed/images/select.gif"]`).nth(0)
        this.lead_source=page.locator(`//select[@name="leadsource"]`)
        this.birth_date=page.locator(`//input[@name="birthday"]`)
        this.email_optout=page.locator(`//input[@name="emailoptout"]`)
        this.reference=page.locator(`//input[@name="reference"]`)
        this.reportTo_popup=page.locator(`//img[@src="themes/softed/images/select.gif"]`).nth(1)
        this.assigned_to=page.locator(`//input[@name="assigntype"]`).nth(1)
        this.assigned_group_id=page.locator(`//select[@name="assigned_group_id"]`)
        this.support_enddate=page.locator(`//input[@name="support_end_date"]`)
        this.other_street=page.locator(`//textarea[@name="otherstreet"]`)
        this.copy=page.locator(`//input[@name="cpy"]`).nth(0)
        this.desc=page.locator(`//textarea[@name="description"]`)

        this.button=page.locator(`//input[@title="Save [Alt+S]"]`).nth(0)
        this.assert1=page.locator(`//span[@id="dtlview_Last Name"]`)
    }

    async contact_details(salutationtype,firstname,lastname,leadsource,birthday,assigned_group_id,support_end_date,otherstreet,description){
        let numb=generateRandomNumber()
        await this.contact.click()
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForLoadState('networkidle')
        //await this.assert2.toBeVisible()

        await this.newContact.click()
        // await this.page.waitForLoadState('domcontentloaded')
        // await this.page.waitForLoadState('networkidle')
        //await this.assert3.toBeVisible()

        await selectByText(this.salutation_type,salutationtype)
        let number = generateRandomNumber()
        await this.first_name.fill(firstname+numb)
        await this.last_Name.fill(lastname+numb)

        let popup1=await switchToPopup(this.page,()=>{
            this.organization_popup.click()
        })
        // await this.page.waitForLoadState('domcontentloaded')
        //await this.page.waitForLoadState('networkidle')
        await popup1.locator(`//a[@id="2"]`).click()

        await selectByText(this.lead_source,leadsource)
        
        const formatted_Birthday = birthday.toISOString().split('T')[0];
        await this.birth_date.fill(formatted_Birthday)
        
        
        //console.log(typeof birthday);
        await this.email_optout.click()
        await this.reference.click()

        let popup2=await switchToPopup(this.page,()=>{
            this.reportTo_popup.click()
        })
        // await this.page.waitForLoadState('domcontentloaded')
        //await this.page.waitForLoadState('networkidle')
        await popup2.locator(`//a[@id="1"]`).click()

        await this.assigned_to.click()
        await selectByText(this.assigned_group_id,assigned_group_id)
        
        const formatted_SupportEndDate = support_end_date.toISOString().split('T')[0];
        await this.support_enddate.fill(formatted_SupportEndDate)
        
        await this.other_street.fill(otherstreet+numb)
        await this.copy.click()
        await this.desc.fill(description+numb)

        await this.button.scrollIntoViewIfNeeded()
        await this.button.click()

        // await this.page.waitForLoadState('domcontentloaded')
        //await this.page.waitForLoadState('networkidle')
        //await this.assert1.toBeVisible()
    }
}