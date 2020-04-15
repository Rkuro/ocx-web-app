import axios from "axios";
import { ICredentials, IUserPayload } from "../../auth/user";

const API_ENDPOINT = process.env.API_ENDPOINT_URL as string

const createUser = async (user: ICredentials) => {

}

const readUser = async (payload:IUserPayload | string) => {
    let response;
    if (typeof(payload) === "string") {
        response = await axios.get(API_ENDPOINT, {
            params: {
                token:payload
            }
        })
    } else {
        response = await axios.get(API_ENDPOINT, {
            params:{
                id: payload.id
            }
        });
    }
    
    return response as any;
}

const updateUser = async (payload: IUserPayload) => {
    const { token } = payload;
    const response = await fetch("update_user", {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    })
    return response;
}

const deleteUser = async (token:string) => {

}

export {
    createUser,
    readUser,
    updateUser,
    deleteUser
}
