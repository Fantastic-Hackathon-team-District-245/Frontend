import Registration from "./components/Registration/Registration";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profil from "./components/Profil/Profil";
import {createBrowserRouter} from 'react-router-dom'
import TournamentsPage from "./components/pages/tournaments/list/TournamentsPage.tsx";
import Turnir from "./components/Turnir/Turnir.tsx";

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
        element: <TournamentsPage/>,
    },
    {
        path: "turnir",
        element: <Turnir/>,
    }
])

export default router;