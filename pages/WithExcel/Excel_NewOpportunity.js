import { expect } from "@playwright/test";
import { generateRandomNumber } from '../../Utility/Random_Number.js';
import { selectByText } from '../../Utility/DropDown.js';
import { switchToPopup } from "../../Utility/Window_Handling.js";
import { type } from "node:os";

export class Opportunity_loc{
    constructor(page){

        this.page=page;
        this.opportunity=page.locator(`//a[@href="index.php?module=Potentials&action=index"]`)
        this.assert1=page.locator(`//a[@href="index.php?action=ListView&module=Potentials&parenttab=Sales"]`)

        this.new_Opprtunity=page.locator(`//img[@src="themes/softed/images/btnL3Add.gif"]`)
        this.assert2=page.locator(`//span[@class="lvtHeaderText"]`)

        this.opportunity_Name=page.locator(`//input[@name="potentialname"]`)
        this.related_to_dropdown=page.locator(`//select[@id="related_to_type"]`)
        this.Related_popup=page.locator(`//img[@src="themes/softed/images/select.gif"]`).nth(0)
        this.type=page.locator(`//select[@name="opportunity_type"]`)
        this.lead_source=page.locator(`//select[@name="leadsource"]`)
//        this.assigned_to=page.locator(`//input[@name="assigntype"]`).nth(1)
  //      this.assigned_group_id=page.locator(`//select[@name="assigned_group_id"]`)

        this.campaignsource_popup=page.locator(`//img[@src="themes/softed/images/select.gif"]`).nth(1)
        this.expected_closedate=page.locator(`//input[@name="closingdate"]`)
        this.sales_stage=page.locator(`//select[@name="sales_stage"]`)
        this.desc=page.locator(`//textarea[@name="description"]`)

        this.button=page.locator(`//input[@title="Save [Alt+S]"]`).nth(0)
        this.assert3=page.locator(`//span[@id="dtlview_Opportunity Name"]`)
    }

    async Opportunity_details(potentialname,related_to_type,opportunity_type,leadsource,assigned_group_id,closingdate,sales_stage,description){

        let number=generateRandomNumber()
        await this.opportunity.click()
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForLoadState('networkidle')
        //await expect(this.assert1).toBeVisible()

        await this.new_Opprtunity.click()
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForLoadState('networkidle')
        //await expect(this.assert2).toBeVisible()

        await this.opportunity_Name.fill(potentialname+number)
        await selectByText(this.related_to_dropdown,related_to_type)

        let popup1=await switchToPopup(this.page,()=>{
            this.Related_popup.click()
        })
        await this.page.waitForLoadState('domcontentloaded')
        //await this.page.waitForLoadState('networkidle')
        await popup1.locator(`//a[@id="1"]`).click()

        await selectByText(this.type,opportunity_type)
        await selectByText(this.lead_source,leadsource)
    //    await this.assigned_to.click()
      //  await selectByText(this.assigned_group_id,assigned_group_id)

        let popup2=await switchToPopup(this.page,()=>{
            this.campaignsource_popup.click()
            this.page.waitForLoadState('domcontentloaded')
        })
        await this.page.waitForLoadState('domcontentloaded')
        //await this.page.waitForLoadState('networkidle')
        await popup2.locator(`//a[@id="1"]`).click()

        let close_date=closingdate.toISOString().split('T')[0];
        await this.expected_closedate.fill(close_date)

        await selectByText(this.sales_stage,sales_stage)
        await this.desc.fill(description)

        await this.button.click()
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForLoadState('networkidle')
        //await expect(this.assert3).toBeVisible()

    }
}