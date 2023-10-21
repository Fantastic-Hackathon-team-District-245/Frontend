import React from 'react';
import {Link} from "react-router-dom";
import profil from "../Profil/Profil.tsx";

const Home = () => {
    return (
        <div>
            <button>
                <Link to={"/profil"}> Профиль </Link>
            </button>
            <button>
                <Link to={"/turnirs"}> Список турниров </Link>
            </button>
        </div>
    );
};

export default Home;