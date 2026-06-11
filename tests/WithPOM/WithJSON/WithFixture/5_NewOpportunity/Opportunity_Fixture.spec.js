import {test} from "../../../../../fixture/CRM_FixturewithJSON.js"
import opportunity_data from '../../../../../test_data/JSON/New_Opportunity.json'

test('fixture_opportunity',async ({OpportunityPage}) => {

    await test.slow()
    await OpportunityPage.Opportunity_details()
    
})