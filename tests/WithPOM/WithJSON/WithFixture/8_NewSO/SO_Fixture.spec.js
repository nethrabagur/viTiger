import {test} from "../../../../../fixture/CRM_FixturewithJSON.js"
import so_data from '../../../../../test_data/JSON/New_SalesOrder.json'

test('fixture_so',async ({SOPage}) => {
    await test.slow()
    await SOPage.SaleOrder_detail()
})