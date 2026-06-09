import { expect } from "@playwright/test";
import { generateRandomNumber } from '../../Utility/Random_Number.js';
import { selectByText } from '../../Utility/DropDown.js';
import { switchToPopup } from "../../Utility/Window_Handling.js";

export class Invoice_loc{
    constructor(page) {

        this.page=page
        this.more=page.locator(`//a[text()="More"]`)
        this.invoice=page.locator(`//a[@name="Invoice"]`)
        this.assert1=page.locator(`//a[@class="hdrLink"]`)
        this.create_invoice=page.locator(`//img[@src="themes/softed/images/btnL3Add.gif"]`)
        this.assert2=page.locator(`//span[@class="lvtHeaderText"]`)

        this.subject=page.locator(`//input[@name="subject"]`)
        this.salesorder_popup=page.locator(`//img[@src="themes/softed/images/select.gif"]`).nth(0)
        this.contactName_popup=page.locator(`//img[@src="themes/softed/images/select.gif"]`).nth(1)
        this.organization_popup=page.locator(`//img[@src="themes/softed/images/select.gif"]`).nth(2)

        this.Bill_Address=page.locator(`//textarea[@name="bill_street"]`)
        this.Ship_address=page.locator(`//textarea[@name="ship_street"]`)
        this.save_button=page.locator(`//input[@title="Save [Alt+S]"]`).nth(0)
        this.assert3=page.locator(`//span[@id="dtlview_Subject"]`)
        
    }

    async Invoice_details(subject,bill_street,ship_street){
        
        await this.more.hover()
        await this.invoice.click()
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForLoadState('networkidle')
        //await expect(this.assert1).toBeVisible()
        
        await this.create_invoice.click()     
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForLoadState('networkidle')
        //await expect(this.assert2).toBeVisible()

        let numb=generateRandomNumber()
        await this.subject.fill(subject+numb)


        let popup1=await switchToPopup(this.page,()=>{
            this.salesorder_popup.click()
        })
        await popup1.waitForLoadState('domcontentloaded')
        await popup1.waitForLoadState('networkidle')
        await popup1.locator(`//a[@id="1"]`).click()

        let popup2=await switchToPopup(this.page,()=>{
            this.contactName_popup.click()
        })
        await popup2.waitForLoadState('domcontentloaded')
        await popup2.waitForLoadState('networkidle')
        await popup2.locator(`//a[@id="1"]`).click()

        let popup3=await switchToPopup(this.page,()=>{
            this.organization_popup.click()
        })
        await popup3.waitForLoadState('domcontentloaded')
        await popup3.waitForLoadState('networkidle')
        await popup3.locator(`//a[@id="1"]`).click()
        
        await this.Bill_Address.fill(bill_street+numb)
        await this.Ship_address.fill(ship_street+numb)
        await this.save_button.scrollIntoViewIfNeeded()
        await this.save_button.click()
        
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForLoadState('networkidle')

        //await expect(this.assert3).toBeVisible()

    }
}