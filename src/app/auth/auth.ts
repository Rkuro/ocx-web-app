import { useCookies } from "react-cookie";
import { IUser, InitialUser } from "./user";

export default function useAuth() {
    const [ cookies, setCookie ] = useCookies(["OCX_TOKEN"])
    const cookieToken = cookies.OCX_TOKEN;
    // No local user, return initial user obj
    if (cookieToken === undefined) {
        return {
            ...InitialUser
        }
    }
    else {
        
    }
}