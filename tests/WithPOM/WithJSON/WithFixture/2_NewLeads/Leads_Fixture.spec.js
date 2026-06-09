import { test } from "../../../../fixture/CRM_Fixture";
import leads_data from '../../../../../test_data/JSON/New_Leads.json'

test('fixture_newLeads',async ({LeadPage}) => {
    await test.slow()
    await LeadPage.leads_details()
})