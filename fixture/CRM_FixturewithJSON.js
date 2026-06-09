import {test as base} from './Login.js'
import { leads_loc } from '../pages/With JSON/New_Leads.js'
import { organization_loc } from '../pages/With JSON/New_Organization.js'
import { contact_loc } from '../pages/With JSON/New_Contacts.js'
import { Opportunity_loc } from '../pages/With JSON/New_Opportunities.js'
import { product_loc } from '../pages/With JSON/New_Product.js'
import {Quotation_loc} from '../pages/With JSON/New_Quotation.js'
import { salesorder_loc } from '../pages/With JSON/New_SalesOrder.js'

export let test=base.extend({

    LeadPage: async ({LoginPage},use) => {
        let leads=new leads_loc(LoginPage)
        await use(leads)    
    },

    OrganizationPage: async ({LoginPage},use) => {
        let org= new organization_loc(LoginPage)
        //await org.org_details() ---SHOULD NEVER CALL THIS 
        await use(org)
    },
    ContactsPage: async ({LoginPage},use) => {
        let contact=new contact_loc(LoginPage)
        await use(contact)
    },
    OpportunityPage: async ({LoginPage},use) => {
        let opportunity=new Opportunity_loc(LoginPage)
        await use(opportunity)
    },
    ProductPage: async ({LoginPage},use) => {
        let product=new product_loc(LoginPage)
        await use(product)
    },
    QuotePage: async ({LoginPage},use) => {
        let quote=new Quotation_loc(LoginPage)
        await use(quote)
    },
    SOPage: async ({LoginPage},use) => {
        let so= new salesorder_loc(LoginPage)
        await use(so)
    }
    
})