import React from 'react';
import {Link} from "react-router-dom";
import NavButton from "../UI/NavButton/NavButton.tsx";

const Home = () => {
    return (
        <div>
            <NavButton>
                <Link to={"/profil"}> Профиль </Link>
            </NavButton>
            <NavButton>
                <Link to={"/turnirs"}> Список турниров </Link>
            </NavButton>
        </div>
    );
};

export default Home;