export interface IBill {
    id: string;
    details: string;
    amount: number;
    due_date: string;
    userId: string;
    payee: string;
}

export type BillState = {
    bills: IBill[],
    loading: boolean,
    error: string | null
}

export type BillAction = {
    type: string,
    bill: IBill
}

export type DispatchType = (args: BillAction) => BillAction