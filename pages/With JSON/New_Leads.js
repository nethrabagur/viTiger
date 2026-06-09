import leads_data from '../../test_data/JSON/New_Leads.json'
import { expect } from "@playwright/test";
import { generateRandomNumber } from '../../Utility/Random_Number.js';
import { selectByText } from '../../Utility/DropDown.js';


export class leads_loc{

    constructor(page){
        this.page=page;
        this.leads=page.locator(`//a[@href="index.php?module=Leads&action=index"]`)
        this.assert2= expect(page.locator(`//a[@href="index.php?action=ListView&module=Leads&parenttab=Marketing"]`))
        
        this.create_lead=page.locator(`//img[@title="Create Lead..."]`)
        this.assert3=expect(page.locator(`//span[@class="lvtHeaderText"]`))

        this.salutation_type=page.locator(`//select[@name="salutationtype"]`)
        this.first_Name=page.locator(`//input[@name="firstname"]`)
        this.last_name=page.locator(`//input[@name="lastname"]`)
        this.company=page.locator(`//input[@name="company"]`)
        this.lead_source=page.locator(`//select[@name="leadsource"]`)
        this.industry=page.locator(`//select[@name="industry"]`)
        this.lead_status=page.locator(`//select[@name="leadstatus"]`)
        this.street=page.locator(`//textarea[@name="lane"]`)
        this.desc=page.locator(`//textarea[@name="description"]`)
        this.button=page.locator(`//input[@class="crmButton small save"]`)
        
        this.assert1= expect(page.locator(`//span[@id="dtlview_Company"]`))
    }

    async leads_details(salutationtype,firstname,lastname,company,leadsource,industry,leadstatus,lane,desc){

        await this.leads.click()
        await this.assert2.toBeVisible()

        await this.create_lead.click()
        await this.assert3.toBeVisible()

        let number = generateRandomNumber()
        await selectByText(this.salutation_type,leads_data.salutationtype)
        await this.first_Name.fill(leads_data.firstname+number)
        await this.last_name.fill(leads_data.lastname+number)
        await this.company.fill(leads_data.company+number)
        await selectByText(this.lead_source,leads_data.leadsource)
        await selectByText(this.industry,leads_data.industry)
        await selectByText(this.lead_status,leads_data.leadstatus)
        await this.street.fill(leads_data.lane)      
        await this.desc.fill(leads_data.description)
        await this.button.scrollIntoViewIfNeeded()
        await this.button.click()

        await this.assert1.toBeVisible()
        
    }

}
