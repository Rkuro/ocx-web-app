export enum ROUTES {
    STAR = "*",
    HOME = "/",
    AUTH = "auth",
    LOGIN = "login",
    SIGNUP = "signup",
    LANDING = "landing",
    DASHBOARD = "dashboard",
    LENDER_DASHBOARD = "lender",
    LENDEE_DASHBOARD = " lendee",
}

export const joinRoutes = (...routes: ROUTES[]): string => {
    console.log("Joining routes: ", routes, "result", routes.join("/"));
    return routes.join("/");
};

export default ROUTES;
