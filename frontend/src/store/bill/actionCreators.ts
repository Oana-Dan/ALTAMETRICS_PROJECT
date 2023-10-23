import { Dispatch } from 'redux';
import { GetBillsAction, GetBillsActionType } from './actionTypes';
import { IBill } from '../../storeTypes/bills.store.types';
import { store } from '../store';
import { ILogin, IUser } from '../../storeTypes/user.store.types';

export const getBills = () => {
    return async (dispatch: Dispatch<GetBillsAction>) => {
        dispatch({
            type: GetBillsActionType.GET_BILLS_PENDING
        });
        const login =  store.getState().login

        try {        
            const loginData: ILogin = Object(login).hasOwnProperty('loginData') ? Object(login).loginData : {};
            const token: string = Object(loginData).hasOwnProperty('accessToken') ? Object(loginData).accessToken : '';
            const user: IUser = Object(loginData).hasOwnProperty('user') ? Object(loginData).user : {};
            const userId: string = user.id;
            await fetch(`http://localhost:3000/bills?userId=${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
              })
            .then((data =>{
                return data.json()
            }))
            .then((bills: IBill[]) => {
                dispatch({
                    type: GetBillsActionType.GET_BILLS_SUCCESS,
                    payload: bills
                });
            })

        } catch(err) {
            if (err instanceof Error) {
                dispatch({
                    type: GetBillsActionType.GET_BILLS_FAIL,
                    payload: err.message
                })
            }
        }
    }
} 