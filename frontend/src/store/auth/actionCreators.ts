import { Dispatch } from "react"
import { LoginUserAction, LoginUserActionType } from "./loginActionTypes"
import { ILogin, IRegister } from "../../storeTypes/user.store.types";
import { RegisterUserAction, RegisterUserActionType } from "./registerActionTypes";

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<LoginUserAction>) => {
        dispatch({
            type: LoginUserActionType.LOGIN_PENDING
        });
        try {
            await fetch('http://localhost:3000/auth/signin', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            .then((data =>{
                return data.json()
            }))
            .then((loginData: ILogin) => {
                dispatch({
                    type: LoginUserActionType.LOGIN_SUCCESS,
                    payload: loginData
                });
            })
        } catch(err) {
            if (err instanceof Error) {
                dispatch({
                    type: LoginUserActionType.LOGIN_FAIL,
                    payload: err.message
                })
            }
        }
    }
}

export const register = (email: string, password: string, name: string) => {
    return async (dispatch: Dispatch<RegisterUserAction>) => {
        dispatch({
            type: RegisterUserActionType.REGISTER_PENDING
        });
        try {
            await fetch('http://localhost:3000/auth/register', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ email, password, name })
            })
            .then((data =>{
                return data.json()
            }))
            .then((registerData: IRegister) => {
                dispatch({
                    type: RegisterUserActionType.REGISTER_SUCCESS,
                    payload: registerData
                });
            })
        } catch(err) {
            if (err instanceof Error) {
                dispatch({
                    type: RegisterUserActionType.REGISTER_FAIL,
                    payload: err.message
                })
            }
        }
    }
}