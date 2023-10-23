import { LoginState } from "../../storeTypes/user.store.types"
import { LoginUserActionType } from "./loginActionTypes"
import { LoginUserAction } from "./loginActionTypes"

const initialState: LoginState = {
    loginData: {
        accessToken: '',
        user: {
            id: '',
            email: '',
            password: '',
            name: '',
            bills: [],
            invoices: []
        },   
    }, 
    loading: false,
    error: ''
}

const loginReducer = (state: LoginState = initialState, action: LoginUserAction) => {
    switch(action.type) {
        case LoginUserActionType.LOGIN_PENDING:
            return {
                loading: true 
            } 
        case LoginUserActionType.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loginData: action.payload
            }
        case LoginUserActionType.LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}

export default loginReducer;