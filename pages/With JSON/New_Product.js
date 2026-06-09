import product_data from '../../test_data/JSON/New_Product.json'
import { expect } from "@playwright/test";
import { generateRandomNumber } from '../../Utility/Random_Number.js';
import { selectByText } from '../../Utility/DropDown.js';

export class product_loc{
    
    constructor (page){
        this.page=page;
        this.products=page.locator(`//a[@href="index.php?module=Products&action=index"]`)
        this.assert1=expect(page.locator(`//a[@href="index.php?action=ListView&module=Products&parenttab=Inventory"]`))
        this.Create_Product=page.locator(`//img[@src="themes/softed/images/btnL3Add.gif"]`)
        this.assert2= expect(page.locator(`//a[@class="hdrLink"]`))

        this.product_Name=page.locator(`//input[@name="productname"]`)
        this.manufacturer=page.locator(`//select[@name="manufacturer"]`)
        this.product_category=page.locator(`//select[@name="productcategory"]`)
        this.unit_Price=page.locator(`//input[@id="unit_price"]`)
        this.qty_Stock=page.locator(`//input[@id="qtyinstock"]`)
        this.save_button=page.locator(`//input[@class="crmbutton small save"]`).first()

        this.assert3=expect(page.locator(`//td[@id="mouseArea_Part Number"]`))
        
    }

    async product_details(){

        let numb=generateRandomNumber()
        await this.products.click()
        await this.assert1.toBeVisible()
        await this.Create_Product.click()
        await this.assert2.toBeVisible()

        await this.product_Name.fill(product_data.productname+numb)
        await selectByText(this.manufacturer,product_data.manufacturer)
        await selectByText(this.product_category,product_data.productcategory)
        await this.unit_Price.scrollIntoViewIfNeeded()
        await this.unit_Price.fill(product_data.unit_price)
        await this.qty_Stock.fill(product_data.qtyinstock)
        await this.save_button.scrollIntoViewIfNeeded()
        await this.save_button.click()

        await this.assert3.toBeVisible()

    }
}