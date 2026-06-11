import {test} from "../../../../../fixture/CRM_FixturewithJSON.js"
import leads_data from '../../../../../test_data/JSON/New_Leads.json'

test('fixture_newLeads',async ({LeadPage}) => {
    await test.slow()
    await LeadPage.leads_details()
})