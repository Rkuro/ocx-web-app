import { Cookies } from "react-cookie";

export interface CookieState {
    greetingViewed?: boolean;
}


export default class AppCookies {
    public cookies: Cookies;
    constructor(cookies: Cookies) {
        this.cookies = cookies;
    }
}