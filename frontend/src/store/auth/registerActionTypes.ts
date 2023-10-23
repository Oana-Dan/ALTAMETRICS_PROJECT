import { IRegister } from "../../storeTypes/user.store.types";

export enum RegisterActionTypes {
    REGISTER = 'REGISTER',
}

export enum RegisterUserActionType {
    REGISTER_PENDING = 'REGISTER_PENDING',
    REGISTER_SUCCESS = 'REGISTER_SUCCESS',
    REGISTER_FAIL = 'REGISTER_FAIL'
}

interface actionPending {
    type: RegisterUserActionType.REGISTER_PENDING;
}

interface actionSuccess {
    type: RegisterUserActionType.REGISTER_SUCCESS;
    payload: IRegister;
}

interface actionFail {
    type: RegisterUserActionType.REGISTER_FAIL;
    payload: string ;
}

export type RegisterUserAction = actionPending | actionSuccess | actionFail;
