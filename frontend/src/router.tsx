import Registration from "./components/Registration/Registration";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profil from "./components/Profil/Profil";
import Turnirs from "./components/Turnirs/Turnirs";
import Turnir from "./components/Turnir/Turnir";
import {createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/register",
        element: <Registration/>,
    },
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/profil",
        element: <Profil/>,
    },
    {
        path: "/turnirs",
        element: <Turnirs/>,
    },
    {
        path: "turnir",
        element: <Turnir/>,
    }
])

export default router;