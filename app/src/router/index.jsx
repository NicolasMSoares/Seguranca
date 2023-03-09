import { createBrowserRouter } from "react-router-dom";
import { HomeScreen } from "../screens/home/home.screen";
import { RegisterScreen } from "../screens/register/register.screen";
import { LoginScreen } from "../screens/login/login.screen";
import { AlterScreen } from "../screens/alter/alter.screen";



export const router = createBrowserRouter([

    {
        path: "/",
        element: <LoginScreen />
    },
    {
        path: "/home",
        element: <HomeScreen />
    },
    {
        path: '/register',
        element: <RegisterScreen/>
    },
    {
        path: '/alter',
        element: <AlterScreen/>
    }
]);