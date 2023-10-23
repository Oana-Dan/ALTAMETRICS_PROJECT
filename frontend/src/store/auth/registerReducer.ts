import { RegisterState } from "../../storeTypes/user.store.types"
import { RegisterUserAction, RegisterUserActionType } from "./registerActionTypes"

const initialState: RegisterState = {
    registerData: {
        email: '',
        password: '',
        name: '',
    },   
    loading: false,
    error: ''
}

const registerReducer = (state: RegisterState = initialState, action: RegisterUserAction) => {
    switch(action.type) {
        case RegisterUserActionType.REGISTER_PENDING:
            return {
                loading: true 
            } 
        case RegisterUserActionType.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                registerData: action.payload
            }
        case RegisterUserActionType.REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}

export default registerReducer;