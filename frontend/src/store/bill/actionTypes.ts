import { IBill } from "../../storeTypes/bills.store.types";

export enum BillActionTypes {
    GET_BILL = "GET_BILL",
    GET_BILLS = "GET_BILLS"
}

export enum GetBillsActionType {
    GET_BILLS_PENDING = 'GET_BILLS_PENDING',
    GET_BILLS_SUCCESS = 'GET_BILLS_SUCCESS',
    GET_BILLS_FAIL = 'GET_BILLS_FAIL'
}

interface actionPending {
    type: GetBillsActionType.GET_BILLS_PENDING;
}

interface actionSuccess {
    type: GetBillsActionType.GET_BILLS_SUCCESS;
    payload: IBill[];
}

interface actionFail {
    type: GetBillsActionType.GET_BILLS_FAIL;
    payload: string ;
}

export type GetBillsAction = actionPending | actionSuccess | actionFail;
