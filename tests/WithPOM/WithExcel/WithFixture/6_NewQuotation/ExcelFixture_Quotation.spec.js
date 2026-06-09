import { test } from "../../../../../fixture/CRMFixturewithEXCEL";

test('ExcelFixture_NewQuotation',async ({QuotationPage}) => {
    test.slow()
    let {quotation,quotation_data} = QuotationPage
    
    for (let row of quotation_data){
        await quotation.quotation_detail(
            row.subject,
            row.quotestage,
            row.carrier,
            row.qty1,
            row.bill_street,
            row.ship_street
        )
    }
    
})