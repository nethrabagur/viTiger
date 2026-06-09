import { test } from "../../../../../fixture/CRMFixturewithEXCEL";

test('ExcelFixture_NewOrg',async ({OrganizationPage}) => {
    test.slow()
    let {organization,org_data} = OrganizationPage
    for(let row of org_data){
        await organization.org_details(
            row.accountname,
            row.website,
            row.industry,
            row.accounttype,
            row.assigned_group_id,
            row.rating,
            row.bill_street,
            row.description
        )
    }  
})