import { combineReducers } from 'redux';
import billsReducer from './bill/reducer';
import loginReducer from './auth/loginReducer';
import registerReducer from './auth/registerReducer';

const reducers = combineReducers({
    bills: billsReducer,
    login: loginReducer,
    register: registerReducer
});

export const initialState = {
    bills: [],
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
    registerData: {
        email: '',
        password: '',
        name: ''
    }
}
export default reducers;