import { expect } from "@playwright/test";
import { generateRandomNumber } from '../../Utility/Random_Number.js';
import { selectByText } from '../../Utility/DropDown.js';
import { switchToPopup } from "../../Utility/Window_Handling.js";

export class Quotation_loc{
    constructor(page){

        this.page=page;
        this.more=page.locator(`//a[text()="More"]`)
        this.quotation = page.locator(`//a[@name="Quotes"]`)
        this.assert1=page.locator(`//a[@class="hdrLink"]`)

        this.quotation_Create=page.locator(`//img[@src="themes/softed/images/btnL3Add.gif"]`)
        this.assert2=page.locator(`//span[@class="lvtHeaderText"]`)

        this.subject=page.locator(`//input[@name="subject"]`)
        this.opportunityname_popup=page.locator(`//img[@src="themes/softed/images/select.gif"]`).nth(0)
        this.quote_stage=page.locator(`//select[@name="quotestage"]`)
        this.contactName_popup=page.locator(`//img[@src="themes/softed/images/select.gif"]`).nth(1)
        this.carrier=page.locator(`//select[@name="carrier"]`)
        //this.orgPopUp=page.locator(`//img[@src="themes/softed/images/select.gif"]`).nth(2)

        this.Bill_Address=page.locator(`//textarea[@name="bill_street"]`)
        this.Ship_Address=page.locator(`//textarea[@name="ship_street"]`)
        this.itemName_popup=page.locator(`//img[@id="searchIcon1"]`)
        this.qty=page.locator(`//input[@id="qty1"]`)
        this.saveButton=page.locator(`//input[@class="crmbutton small save"]`).first()

        this.assert3=page.locator(`//span[@id="dtlview_Subject"]`)
        
    }
    async quotation_detail(subject,quotestage,carrier,qty1,bill_street,ship_street){

        await this.more.hover()
        await this.quotation.click()
        // await this.page.waitForLoadState('domcontentloaded')
        // await this.page.waitForLoadState('networkidle')
        //await expect(this.assert1).toBeVisible()
        
        await this.quotation_Create.click()
        // await this.page.waitForLoadState('domcontentloaded')
        // await this.page.waitForLoadState('networkidle')
        //await expect(this.assert2).toBeVisible()

        let numb=generateRandomNumber()

        await this.subject.fill(subject+numb)

        let popup1=await switchToPopup(this.page,()=>{
            this.opportunityname_popup.click()
        })
        // await this.popup1.waitForLoadState('domcontentloaded')
        // await this.popup1.waitForLoadState('networkidle')
        await popup1.locator(`//a[@id="1"]`).click()
                
        await selectByText(this.quote_stage,quotestage)

        let popup2=await switchToPopup(this.page,()=>{
            this.contactName_popup.click()
        })
        // await popup2.waitForLoadState('domcontentloaded')
        // await popup2.waitForLoadState('networkidle')
        await popup2.locator(`//a[@id="1"]`).click()
        
        await selectByText(this.carrier,carrier)
        
        await this.Bill_Address.fill(bill_street)
        await this.Ship_Address.fill(ship_street)
        
        let popup3=await switchToPopup(this.page,()=>{
            this.itemName_popup.click()
        })
        // await popup3.waitForLoadState('domcontentloaded')
        // await popup3.waitForLoadState('networkidle')
        await popup3.locator(`//a[@id="popup_product_452"]`).click()
        
        await this.qty.fill(qty1.toString())
        await this.saveButton.click()
        // await this.page.waitForLoadState('domcontentloaded')
        // await this.page.waitForLoadState('networkidle')
        //await expect(this.assert3).toBeVisible()
    }

}