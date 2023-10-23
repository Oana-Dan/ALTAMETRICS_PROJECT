import { ILogin } from "../../storeTypes/user.store.types";

export enum LoginActionTypes {
    LOGIN = 'LOGIN',
}

export enum LoginUserActionType {
    LOGIN_PENDING = 'LOGIN_PENDING',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAIL = 'LOGIN_FAIL'
}

interface actionPending {
    type: LoginUserActionType.LOGIN_PENDING;
}

interface actionSuccess {
    type: LoginUserActionType.LOGIN_SUCCESS;
    payload: ILogin;
}

interface actionFail {
    type: LoginUserActionType.LOGIN_FAIL;
    payload: string ;
}

export type LoginUserAction = actionPending | actionSuccess | actionFail;
