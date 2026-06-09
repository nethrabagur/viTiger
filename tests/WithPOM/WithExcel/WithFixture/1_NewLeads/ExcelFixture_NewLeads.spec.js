//import { test } from "../../../../../fixture/COPY_CRMFixturewithEXCEL"
import { test } from "../../../../../fixture/CRMFixturewithEXCEL";

test('FixtureExcel_NewLeads',async ({LeadsPage}) => {
    test.slow()
    
    let {leads,leads_data} = LeadsPage
    for (let row of leads_data){
        await leads.leads_details(
            row.salutationtype,
            row.firstname,
            row.lastname,
            row.company,
            row.leadsource,
            row.industry,
            row.leadstatus,
            row.lane,
            row.description
        )   
}
})
