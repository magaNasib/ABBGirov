import { IFormValues } from "pages/Create"

export interface IPladge {
    colletralCode: string
    customerCIF: string
    fullname: string
    customerPledge: {
        describe: string
        endDate: string
        pledgedCurrency: string
        pledgesValue: number
        startDate: string
    }
    data: {
        deposit: {
            branch: string
            currency: string
            reference: string
        }[]
        productCode: string
        questions: {
            key: keyof IFormValues
            value: string
            type: string
            maxLenght: number
            minLenght: number
            items: {
                key: string
                value: string
            }[]
        }[]
    }[]
}
