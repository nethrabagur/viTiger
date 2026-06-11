import {test} from "../../../../../fixture/CRM_FixturewithJSON.js"
import org_data from '../../../../../test_data/JSON/New_Organization.json'


test('org_fixture',async ({organization}) => {
    
    await test.slow()
    await organization.create_org(organization.firstname)
})