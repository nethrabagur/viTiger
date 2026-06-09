import { test } from "../../../../fixture/CRM_Fixture";
import quote_data from '../../../../../test_data/JSON/New_Quotation.json'

test('fixture_quotation',async ({QuotePage}) => {
    await test.slow()
    await QuotePage.quotation_detail()
})