import { test } from "../../../../fixture/CRM_Fixture";
import product_data from '../../../../../test_data/JSON/New_Product.json'

test('fixture_product',async ({ProductPage}) => {
    await test.slow()
    await ProductPage.product_details()
})