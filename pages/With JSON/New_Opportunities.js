import opportunity_data from '../../test_data/JSON/New_Opportunity.json'
import { expect } from "@playwright/test";
import { generateRandomNumber } from '../../Utility/Random_Number.js';
import { selectByText } from '../../Utility/DropDown.js';

export class Opportunity_loc{
    constructor(page){

        this.page=page;
        this.opportunity=page.locator(`//a[@href="index.php?module=Potentials&action=index"]`)
        this.assert1=expect(page.locator(`//a[@href="index.php?action=ListView&module=Potentials&parenttab=Sales"]`))

        this.new_Opprtunity=page.locator(`//img[@src="themes/softed/images/btnL3Add.gif"]`)
        this.assert2=expect(page.locator(`//span[@class="lvtHeaderText"]`))

        this.opportunity_Name=page.locator(`//input[@name="potentialname"]`)
        this.Related_To=page.locator(`//img[@src="themes/softed/images/select.gif"]`).first()
        this.type=page.locator(`//select[@name="opportunity_type"]`)
        this.lead_source=page.locator(`//select[@name="leadsource"]`)
        this.expected_CloseDate=page.locator(`//input[@name="closingdate"]`)
        this.button=page.locator(`//input[@title="Save [Alt+S]"]`).first()

        this.assert3=expect(page.locator(`//span[@id="dtlview_Opportunity Name"]`))
    }

    async Opportunity_details(){

        let number=generateRandomNumber()
        await this.opportunity.click()
        await this.assert1.toBeVisible()
        await this.new_Opprtunity.click()
        await this.assert2.toBeVisible()

        await this.opportunity_Name.fill(opportunity_data.potentialname+number)
        //await this.Related_To.fill()

        await selectByText(this.type,opportunity_data.opportunity_type)
        await selectByText(this.lead_source,opportunity_data.leadsource)
        await this.expected_CloseDate.fill(opportunity_data.closingdate)
        
        await this.button.click()

        //await this.assert3.toBeVisible()

    }
}