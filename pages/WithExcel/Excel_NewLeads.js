import { expect } from "@playwright/test";
import { generateRandomNumber } from '../../Utility/Random_Number.js';
import { selectByText } from '../../Utility/DropDown.js';


export class leads_loc{

    constructor(page){
        this.page=page;
        this.leads=page.locator(`//a[@href="index.php?module=Leads&action=index"]`)
        //this.leads_url='http://localhost:8888//index.php?module=Leads&action=index'
        this.assert2= page.locator(`//a[@href="index.php?action=ListView&module=Leads&parenttab=Marketing"]`)
        
        this.create_lead=page.locator(`//img[@title="Create Lead..."]`)
        //this.createleads_url='http://localhost:8888//index.php?module=Leads&action=EditView&return_action=DetailView&parenttab=Marketing'

        this.assert3=page.locator(`//span[@class="lvtHeaderText"]`)

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
        
        //this.saveleads_url='http://localhost:8888//index.php?action=DetailView&module=Leads&record=252&parenttab=Marketing&viewname=0&start='
        //this.assert1= page.locator(`//span[@id="dtlview_Company"]`)
    }

    async leads_details(salutationtype,firstname,lastname,company,leadsource,industry,leadstatus,lane,description){

        await this.leads.click()
        //let url=this.page.url()
        //await expect(url).toHaveURL(this.leads_url)
        //await this.page.waitForLoadState('networkidle')
        //await this.page.waitForLoadState('domcontentloaded')
        //await expect(this.assert2).toBeVisible()


        await this.create_lead.click()
        // let url2=this.page.url()
        // await expect(url).toHaveURL(this.createleads_url)
        //await this.page.waitForLoadState('networkidle')
        //await this.page.waitForLoadState('domcontentloaded')
        //await expect(this.assert3).toBeVisible()
        
        let number = generateRandomNumber()
        await selectByText(this.salutation_type,salutationtype)
        await expect(this.salutation_type).toHaveValue(salutationtype)
        await this.first_Name.fill(firstname+number)
        await expect(this.first_Name).toHaveValue(firstname+number)
        await this.last_name.fill(lastname+number)
        await expect(this.last_name).toHaveValue(lastname+number)
        await this.company.fill(company+number)
        await expect(this.company).toHaveValue(company+number)
        await selectByText(this.lead_source,leadsource)
        await expect(this.lead_source).toHaveValue(leadsource)
        await selectByText(this.industry,industry)
        await expect(this.industry).toHaveValue(industry)
        await selectByText(this.lead_status,leadstatus)
        await expect(this.lead_status).toHaveValue(leadstatus)
        await this.street.fill(lane)      
        await expect(this.street).toHaveValue(lane)
        await this.desc.fill(description)
        await expect(this.desc).toHaveValue(description)
        await this.button.scrollIntoViewIfNeeded()
        await expect(this.button).toBeVisible()
        await this.button.click()
        
        //await this.page.waitForLoadState('networkidle')
        //await this.page.waitForLoadState('domcontentloaded')
        
        // let url3=this.page.url()
        // await expect(this.url3).toHaveURL(this.saveleads_url)
        //await expect(this.assert1).toBeVisible()
    }

}
