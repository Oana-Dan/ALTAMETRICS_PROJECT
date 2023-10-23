import { IUser } from "../../storeTypes/user.store.types";

export enum GetUserActionTypes {
    GET_USER = 'GET_USER',
}

export enum GetUserActionType {
    GET_USER_PENDING = 'GET_USER_PENDING',
    GET_USER_SUCCESS = 'GET_USER_SUCCESS',
    GET_USER_FAIL = 'GET_USER_FAIL'
}

interface actionPending {
    type: GetUserActionType.GET_USER_PENDING;
}

interface actionSuccess {
    type: GetUserActionType.GET_USER_SUCCESS;
    payload: IUser;
}

interface actionFail {
    type: GetUserActionType.GET_USER_FAIL;
    payload: string ;
}

export type GetUserAction = actionPending | actionSuccess | actionFail;
