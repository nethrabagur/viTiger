import { expect } from "@playwright/test";
import { generateRandomNumber } from '../../Utility/Random_Number.js';
import { selectByText } from '../../Utility/DropDown.js';
import { switchToPopup } from "../../Utility/Window_Handling.js";

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
        this.vendorname_popup=page.locator(`//img[@src="themes/softed/images/select.gif"]`)
        this.GL_account=page.locator(`//select[@name="glacct"]`)
        this.unit_Price=page.locator(`//input[@id="unit_price"]`)
        this.qty_Stock=page.locator(`//input[@id="qtyinstock"]`)
        
        this.save_button=page.locator(`//input[@class="crmbutton small save"]`).nth(0)
        this.assert3=expect(page.locator(`//td[@id="mouseArea_Part Number"]`))
        
    }

    async product_details(productname, manufacturer, productcategory, glacct,unit_price,qtyinstock){

        let numb=generateRandomNumber()
        await this.products.click()
        await this.page.waitForLoadState('domcontentloaded')
        // await this.page.waitForLoadState('networkidle')
        //await this.assert1.toBeVisible()
        await this.Create_Product.click()
        await this.page.waitForLoadState('domcontentloaded')
        // await this.page.waitForLoadState('networkidle')
        //await this.assert2.toBeVisible()

        await this.product_Name.fill(productname+numb)
        await selectByText(this.manufacturer,manufacturer)
        //await selectByText(this.product_category,productcategory)

        // let popup1=await switchToPopup(this.page,()=>{
        //     this.vendorname_popup.click()
        // })
        // await this.popup1.waitForLoadState('domcontentloaded')
        // await this.popup1.waitForLoadState('networkidle')
        // await this.popup1.locator(`//a[@id="1"]`).click()
        
        

        await selectByText(this.GL_account,glacct)
        await this.unit_Price.scrollIntoViewIfNeeded()
        await this.unit_Price.fill(unit_price.toString())
        await this.qty_Stock.fill(qtyinstock.toString())
        await this.save_button.scrollIntoViewIfNeeded()
        await this.save_button.click()
        
        await this.page.waitForLoadState('domcontentloaded')
        // await this.page.waitForLoadState('networkidle')
        //await this.assert3.toBeVisible()

    }
}