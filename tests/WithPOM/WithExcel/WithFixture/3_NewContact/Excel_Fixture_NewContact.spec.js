import { test } from "../../../../../fixture/CRMFixturewithEXCEL";

test('fixtureexcel_newCOntact',async ({ContactsPage}) => {
    test.slow()
    let {contact,contact_data} =ContactsPage
    for(let row of contact_data){
        await contact.contact_details(
            row.salutationtype,
            row.firstname,
            row.lastname,
            row.leadsource,
            row.birthday,
            row.assigned_group_id,
            row.support_end_date,
            row.otherstreet,
            row.description
        )
    }
    
})