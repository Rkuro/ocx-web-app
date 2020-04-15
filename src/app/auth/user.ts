export interface IUserPayload {
    id?: string,
    firstName?: string,
    lastName?: string,
    token?: string
}

export interface IUser {
    id: string,
    firstName: string,
    lastName: string,
}

export interface ICredentials {
    username: string,
    password: string
}

export interface IToken {
    value?:string,
    ttl: number
}

export const InitialUser:IUser = {
    id:"",
    firstName:"",
    lastName:"",
}


