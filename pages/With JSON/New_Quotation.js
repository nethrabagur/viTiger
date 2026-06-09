import quotation_data from '../../test_data/JSON/New_Quotation.json'
import { expect } from "@playwright/test";
import { generateRandomNumber } from '../../Utility/Random_Number.js';
import { selectByText } from '../../Utility/DropDown.js';

export class Quotation_loc{
    constructor(page){

        this.page=page;
        this.more=page.locator(`//a[text()="More"]`)
        this.quotation = page.locator(`//a[@name="Quotes"]`)
        this.assert1=expect(page.locator(`//a[@class="hdrLink"]`))

        this.quotation_Create=page.locator(`//img[@src="themes/softed/images/btnL3Add.gif"]`)
        this.assert2=expect(page.locator(`//span[@class="lvtHeaderText"]`))

        this.subject=page.locator(`//input[@name="subject"]`)
        this.quote_stage=page.locator(`//select[@name="quotestage"]`)
        this.carrier=page.locator(`//select[@name="carrier"]`)
        this.orgPopUp=page.locator(`//img[@src="themes/softed/images/select.gif"]`).nth(2)
        this.Bill_Address=page.locator(`//textarea[@name="bill_street"]`)
        this.Ship_Address=page.locator(`//textarea[@name="ship_street"]`)
        this.item_Name=page.locator(`//img[@id="searchIcon1"]`)
        this.qty=page.locator(`//input[@id="qty1"]`)
        this.saveButton=page.locator(`//input[@class="crmbutton small save"]`).first()

        this.assert3=expect(page.locator(`//span[@id="dtlview_Subject"]`))
        
    }
    async quotation_detail(){

        await this.more.hover()
        await this.quotation.click()
        await this.assert1.toBeVisible()
        await this.quotation_Create.click()
        await this.assert2.toBeVisible()
        let numb=generateRandomNumber()
        await this.subject.fill(quotation_data.subject+numb)
        await selectByText(this.quote_stage,quotation_data.quotestage)
        await selectByText(this.carrier,quotation_data.carrier)
        await this.orgPopUp.click()
        await this.Bill_Address.fill(quotation_data.bill_street)
        await this.Ship_Address.fill(quotation_data.ship_street)
        await this.item_Name.click()
        await this.qty.fill(quotation_data.qty1)
        await this.saveButton.click()

        //await this.assert3.toBeVisible()
    }

}