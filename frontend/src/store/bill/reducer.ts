import { BillState } from '../../storeTypes/bills.store.types';
import { GetBillsAction, GetBillsActionType } from './actionTypes';

const initialState: BillState = {
    bills: [],
    error: '',
    loading: false
}

const billReducer = (state: BillState = initialState, action: GetBillsAction) => {
    switch(action.type) {
        case GetBillsActionType.GET_BILLS_PENDING:
            return {
                loading: true 
            } 
        case GetBillsActionType.GET_BILLS_SUCCESS:
            return {
                loading: false,
                bills: action.payload
            }
        case GetBillsActionType.GET_BILLS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}

export default billReducer;