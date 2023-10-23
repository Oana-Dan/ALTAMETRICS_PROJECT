export interface IInvoice {
    id: string;
    details: string;
    amount: number;
    due_date: Date;
    userId: string;
}

export type InvoiceState = {
    bills: IInvoice[],
    loading: boolean,
    error: string | null
}

export type InvoiceAction = {
    type: string,
    bill: IInvoice
}

export type DispatchType = (args: InvoiceAction) => InvoiceAction