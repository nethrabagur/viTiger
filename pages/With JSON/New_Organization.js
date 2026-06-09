import org_data from '../../test_data/JSON/New_Organization.json'
import { expect } from "@playwright/test";
import { generateRandomNumber } from '../../Utility/Random_Number.js';
import { selectByText } from '../../Utility/DropDown.js';

export class organization_loc{
    constructor(page){
        this.page=page;
        this.org=page.locator(`//a[@href="index.php?module=Accounts&action=index"]`).first()
        this.assert2=expect(page.locator(`//a[@class="hdrLink"]`))

        this.CreateOrg=page.locator(`//img[@src="themes/softed/images/btnL3Add.gif"]`)
        this.assert3=expect(page.locator(`//span[@class="lvtHeaderText"]`))

        
        this.OrgName=page.locator(`//input[@name="accountname"]`)
        this.type=page.locator(`//select[@name="accounttype"]`)
        this.rating=page.locator(`//select[@name="rating"]`)
        this.notify=page.locator(`//input[@name="notify_owner"]`)
        this.Desc=page.locator(`//textarea[@name="description"]`)
        this.button=page.locator(`//input[@title="Save [Alt+S]"]`).first()

        this.assert1= expect(page.locator(`//span[@id="dtlview_Organization Name"]`))
        
    }

    async org_details(){
        
        let number=generateRandomNumber()
        await this.org.click()
        await this.assert2.toBeVisible()
        await this.CreateOrg.click()
        await this. assert3.toBeVisible()
        await this.OrgName.fill(org_data.accountname+number)
        await selectByText(this.type,org_data.accounttype)
        await selectByText(this.rating,org_data.rating)
        await this.notify.click()
        await this.Desc.fill(org_data.description)
        await this.button.click()

        await this.assert1.toBeVisible()
    }
}