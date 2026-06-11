import {test} from "../../../../../fixture/CRM_FixturewithJSON.js"
import contacts_data from '../../../../../test_data/JSON/New_Contacts.json'

test('contacts_fixture',async ({ContactsPage}) => {

    await test.slow()
    await ContactsPage.contact_details()
})