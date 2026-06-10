import { expect } from "@playwright/test";
import { generateRandomNumber } from '../../Utility/Random_Number.js';
import { selectByText } from '../../Utility/DropDown.js';
import { switchToPopup } from "../../Utility/Window_Handling.js";

export class organization_loc{
    constructor(page){
        this.page=page;
        this.org=page.locator(`//a[@href="index.php?module=Accounts&action=index"]`).nth(0)
        this.assert2=page.locator(`//a[@class="hdrLink"]`)
        
        this.CreateOrg=page.locator(`//img[@src="themes/softed/images/btnL3Add.gif"]`)
        this.assert3=page.locator(`//span[@class="lvtHeaderText"]`)
       
        this.OrgName=page.locator(`//input[@name="accountname"]`)
        this.website=page.locator(`//input[@name="website"]`)
        this.memberOf_popup=page.locator(`//img[@src="themes/softed/images/select.gif"]`)

        this.industry=page.locator(`//select[@name="industry"]`)
        this.type=page.locator(`//select[@name="accounttype"]`)
        this.assigned_to=page.locator(`//input[@value="T"]`)
        this.assigned_group_id=page.locator(`//select[@name="assigned_group_id"]`)
        this.rating=page.locator(`//select[@name="rating"]`)
        this.notify=page.locator(`//input[@name="notify_owner"]`)
        this.bill_street=page.locator(`//textarea[@name="bill_street"]`)
        this.copy=page.locator(`//input[@onclick="return copyAddressRight(EditView)"]`)
        this.Desc=page.locator(`//textarea[@name="description"]`)
        this.button=page.locator(`//input[@title="Save [Alt+S]"]`).nth(0)

        this.assert1= page.locator(`//span[@id="dtlview_Organization Name"]`)
    }

    async org_details(accountname, website, industry, accounttype,assigned_group_id,rating,bill_street,description){

        let number=generateRandomNumber()
        await this.org.click()
        await this.page.waitForLoadState('domcontentloaded')
        //await this.page.waitForLoadState('networkidle')
        //await expect(this.assert2).toBeVisible()
        
        await this.CreateOrg.click()
        await this.page.waitForLoadState('domcontentloaded')
        // await this.page.waitForLoadState('networkidle')
        //await expect(this.assert3).toBeVisible()
        
        await this.OrgName.fill(accountname+number)
        await this.website.fill(website+number)

        let popup=await switchToPopup(this.page,()=>{
            this.memberOf_popup.click()
        })
        await popup.locator(`//a[@id="1"]`).click()

        await selectByText(this.industry,industry)
        await selectByText(this.type,accounttype)
        await this.assigned_to.click()
        await selectByText(this.assigned_group_id,assigned_group_id)
        await selectByText(this.rating,rating)
        await this.notify.click()
        await this.bill_street.fill(bill_street+number)
        await this.copy.click()
        await this.Desc.fill(description+number)
        await this.button.click()
        
        await this.page.waitForLoadState('domcontentloaded')
        // await this.page.waitForLoadState('networkidle')
        //await this.assert1.toBeVisible()
    }
}