import { test } from "../../../../fixture/CRM_Fixture";
import org_data from '../../../../../test_data/JSON/New_Organization.json'


test('fixture_organization',async ({OrganizationPage}) => {
    await test.slow()
    await OrganizationPage.org_details(org_data.accountname,org_data.accounttype,org_data.rating,org_data.bill_street,org_data.description)
})