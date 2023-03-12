import { createBrowserRouter } from "react-router-dom";
import { HomeScreen } from "../screens/home/home.screen";
import { RegisterScreen } from "../screens/register/register.screen";
import { LoginScreen } from "../screens/login/login.screen";
import { AlterScreen } from "../screens/alter/alter.screen";
import { ForgotPasswordScreen } from "../screens/forgot_password/forgot.password.screen";
import { AlterPasswordScreen } from "../screens/forgot_password/alter.password.screen";



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
    },
    {
        path: '/forgot_password',
        element: <ForgotPasswordScreen/>
    },
    {
        path: '/alter_password',
        element: <AlterPasswordScreen/>
    }
]);