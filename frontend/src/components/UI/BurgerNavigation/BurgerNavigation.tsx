import React from 'react';
import "./BurgerNavigation.css"
import {Link} from "react-router-dom";

const BurgerNavigation = () => {
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox"/>
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>

            <ul className="menu__box">
                <Link to={"/"}>
                    <li><a className="menu__item">Home</a></li>
                </Link>
                <Link to={"/profil"}>
                    <li><a className="menu__item">Profil</a></li>
                </Link>
            </ul>
        </div>
    );
};

export default BurgerNavigation;