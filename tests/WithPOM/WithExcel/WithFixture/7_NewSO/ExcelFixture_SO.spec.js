import { test } from "../../../../../fixture/CRMFixturewithEXCEL";

test('excelFixture_NewSO',async ({SalesOrderPage}) => {

    test.slow()
    let {salesorder,salesorder_data} =SalesOrderPage
    for (let row of salesorder_data){
        await salesorder.SaleOrder_detail(
            row.subject,
            row.carrier,
            row.sostatus,
            row.bill_street,
            row.ship_street
        )
    }   
})