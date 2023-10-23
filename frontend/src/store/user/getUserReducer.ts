import { UserState } from "../../storeTypes/user.store.types"
import { GetUserAction, GetUserActionType } from "./getUserActionTypes"

const initialState: UserState = {
    user: {
        id: "",
        email: "",
        password: "",
        name: "",
        bills: [],
        invoices: []
    },
    error: '',
    loading: false
}

const getUserReducer = (state: UserState = initialState, action: GetUserAction) => {
    switch(action.type) {
        case GetUserActionType.GET_USER_PENDING:
            return {
                loading: true 
            } 
        case GetUserActionType.GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                loginData: action.payload
            }
        case GetUserActionType.GET_USER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}

export default getUserReducer;