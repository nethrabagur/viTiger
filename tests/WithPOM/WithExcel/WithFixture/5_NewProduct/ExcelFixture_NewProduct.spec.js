import { test } from "../../../../../fixture/CRMFixturewithEXCEL";

test('ExcelFixture_NewProduct',async ({ProductPage}) => {
    test.slow()

    let {product,product_data} = ProductPage

    for (let row of product_data){
        await product.product_details(
            row.productname,
            row.manufacturer,
            row.prouctcategory,
            row.glacct,
            row.unit_price,
            row.qtyinstock
        )
    }
})