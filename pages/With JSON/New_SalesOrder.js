import salesorder_data from '../../test_data/JSON/New_SalesOrder.json'
import { expect } from "@playwright/test";
import { generateRandomNumber } from '../../Utility/Random_Number.js';
import { selectByText } from '../../Utility/DropDown.js';

export class salesorder_loc{
    constructor(page) {

        this.page=page
        this.more=page.locator(`//a[text()="More"]`)
        this.sale_Order=page.locator(`//a[@name="Sales Order"]`)
        this.assert1=expect(page.locator(`//a[@class="hdrLink"]`))

        this.create_SO=page.locator(`//img[@src="themes/softed/images/btnL3Add.gif"]`)
        this.assert2=expect(page.locator(`//span[@class="lvtHeaderText"]`))

        this.subject=page.locator(`//input[@name="subject"]`)
        this.Carrier=page.locator(`//select[@name="carrier"]`)
        this.Status=page.locator(`//select[@name="sostatus"]`)
        this.orgPopUp=page.locator(`//img[@src="themes/softed/images/select.gif"]`).nth(3)
        this.Ship_address=page.locator(`//textarea[@name="bill_street"]`)
        this.Bill_Address=page.locator(`//textarea[@name="ship_street"]`)
        this.product=page.locator(`//img[@id="searchIcon1"]`)
        this.qty=page.locator(`//input[@id="qty1"]`)
        this.SaveButton=page.locator(`//input[@title="Save [Alt+S]"]`).first()

        this.assert3=expect(page.locator(`//span[@id="dtlview_Subject"]`))
    }

    async SaleOrder_detail(){
        let numb=generateRandomNumber()
        await this.more.hover()
        await this.sale_Order.click()
        await this.assert1.toBeVisible()
        await this.create_SO.click()
        await this.assert2.toBeVisible()

        await this.subject.fill(salesorder_data.subject+numb)
        await selectByText(this.Carrier,salesorder_data.carrier)
        await selectByText(this.Status,salesorder_data.sostatus)
        await this.orgPopUp.click()
        await this.Bill_Address.fill(salesorder_data.bill_street)
        await this.Ship_address.fill(salesorder_data.ship_street)
        await this.product.scrollIntoViewIfNeeded()
        await this.product.click()
        await this.qty.fill(salesorder_data.qty1)
        await this.SaveButton.scrollIntoViewIfNeeded()
        await this.SaveButton.click()

        //await this.assert3.toBeVisible()

    }
}