import {test as base } from './COPY_LoginwithEXCEL.js'
//import {test as base} from './LoginwithJSON.js'
import { leads_loc } from '../pages/WithExcel/Excel_NewLeads.js'
import { organization_loc } from '../pages/WithExcel/Excel_NewOrganization.js'
import { contact_loc } from '../pages/WithExcel/Excel_NewContacts.js'
import { Opportunity_loc } from '../pages/WithExcel/Excel_NewOpportunity.js'
import { product_loc } from '../pages/WithExcel/Excel_NewProduct.js'
import { Quotation_loc } from '../pages/WithExcel/Excel_NewQuotation.js'
import { salesorder_loc } from '../pages/WithExcel/Excel_SalesOrder.js'
import { Invoice_loc } from '../pages/WithExcel/Excel_Invoice.js'
import { readExcel } from '../Utility/Excel.js'


export let test = base.extend({
    
    LeadsPage: async ({LoginPage},use) => {
        let leads=new leads_loc(LoginPage)
        let leads_data = await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewLeads.xlsx','Sheet2')
        await use({leads,leads_data})    
        },
    
    OrganizationPage: async ({LoginPage},use) => {
        let organization = new organization_loc(LoginPage)
        let org_data = await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewOrganization.xlsx','Sheet2')
        await use({organization,org_data})
    },

    ContactsPage: async ({LoginPage},use) => {
        let contact= new contact_loc(LoginPage)
        let contact_data = await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewContacts.xlsx','Sheet2')
        await use({contact,contact_data})
    },

    OpportunityPage: async ({LoginPage},use) => {
        let opportunity=new Opportunity_loc(LoginPage)
        let opportunity_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewOpportunity.xlsx','Sheet2')
        await use ({opportunity,opportunity_data})
    },

    ProductPage: async ({LoginPage},use) => {
        let product = new product_loc(LoginPage)
        let product_data = await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewProduct.xlsx','Sheet2')
        await use({product,product_data})
    },
    QuotationPage: async ({LoginPage},use) => {
        let quotation=new Quotation_loc(LoginPage)
        let quotation_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewQuotation.xlsx','Sheet2')

        await use({quotation,quotation_data})
    },
    SalesOrderPage: async ({LoginPage},use) => {
        let salesorder=new salesorder_loc(LoginPage)
        let salesorder_data=await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewSalesOrder.xlsx','Sheet2')
        await use({salesorder,salesorder_data})
    },
    InvoicePage: async ({LoginPage},use) => {

        let invoice=new Invoice_loc(LoginPage)
        let invoice_data = await readExcel('C:/Users/Prasannamurti Desai/Desktop/Playwright Hardcoding/test_data/EXCEL/NewInvoice.xlsx','Sheet2')

        await use({invoice,invoice_data})
    }
    
})



