import { IBill } from "./bills.store.types";
import { IInvoice } from "./invoice.store.types";

export interface IUser {
    id: string;
    email: string;
    password: string;
    name: string;
    bills: IBill[];
    invoices: IInvoice[];
}

export type UserState = {
    user: IUser,
    loading: boolean,
    error: string | null
}

export type UserAction = {
    type: string,
    user: IUser
}

export type UserDispatchType = (args: UserAction) => UserAction

export interface ILogin {
    accessToken: string,
    user: IUser
}

export interface LoginState {
    loginData: ILogin,
    loading: boolean,
    error: string | null
}

export type LoginAction = {
    type: string,
    loginData: ILogin
}

export type LoginDispatchType = (args: LoginAction) => LoginAction

export interface IRegister {
    email: string,
    password: string,
    name: string
}

export interface RegisterState {
    registerData: IRegister,
    loading: boolean,
    error: string | null
}

export type RegisterAction = {
    type: string,
    registerData: IRegister
}

export type RegisterDispatchType = (args: RegisterAction) => RegisterAction