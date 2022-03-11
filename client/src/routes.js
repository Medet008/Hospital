import Admin from "./pages/Admin";
import {ADMIN_ROUTE,  HOSPITAL_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";

import Auth from "./pages/Auth";
import Hospital from "./pages/Hospital";


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ADMIN_ROUTE,
        Component: Hospital
    },
]

export const publicRoutes = [
    {
        path: HOSPITAL_ROUTE,
        
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    
]
