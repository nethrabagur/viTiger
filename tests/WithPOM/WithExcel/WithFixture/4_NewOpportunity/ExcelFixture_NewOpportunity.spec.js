import { test } from "../../../../../fixture/CRMFixturewithEXCEL";

test('ExcelFixture_NewOpportunity',async ({OpportunityPage}) => {
    test.slow()
    
    let {opportunity,opportunity_data} = OpportunityPage
    
    for (let row of opportunity_data){
        await opportunity.Opportunity_details(
            row.potentialname,
            row.related_to_type,
            row.opportunity_type,
            row.leadsource,
            row.assigned_group_id,
            row.closingdate,
            row.sales_stage,
            row.description
        )
    }
    
})