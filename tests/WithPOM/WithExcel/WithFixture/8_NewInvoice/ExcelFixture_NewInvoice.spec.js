import { test } from "../../../../../fixture/CRMFixturewithEXCEL";

test('ExcelFixture_NewInvoice',async ({InvoicePage}) => {
    test.slow()

    let {invoice,invoice_data} = InvoicePage
    for (let row of invoice_data){
        await invoice.Invoice_details(
            row.subject,
            row.bill_street,
            row.ship_street
        )
    }
    
})