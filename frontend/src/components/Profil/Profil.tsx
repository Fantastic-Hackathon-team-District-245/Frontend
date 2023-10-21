import React, {useState} from 'react';
import BurgerNavigation from "../UI/BurgerNavigation/BurgerNavigation";
import styles from "./Profil.module.css"
import todo from "../../store/todo";

const Profil = () => {
    const [data, setData] = useState({
        id: 0,
        teamName: " "
    });

    function edit(prop, event) {
        setData({...data, ...{[prop]: event.target.value}});
    }

    function handler() {
        //поиск человека
    }

    return (
        <div className={styles.profil__container}>
            <BurgerNavigation/>{/*1!!!!!!!!!!!!!!!!!!!!!*/}
            <div className={styles.history}>
                <h2>История турниров</h2>
                <ul className={styles.list__history}>
                    <li>дата: 21.12.23 название: GG место: 2</li>
                    <li>дата: 21.07.23 название: tt место: 3</li>
                    <li>дата: 21.04.23 название: pudg место: 1</li>
                    <li>дата: 21.03.23 название: hh место: 7</li>
                    <li>дата: 21.09.23 название: ff место: 3</li>
                    {/*здесь список турниров должен быть*/}
                </ul>
            </div>
            <div className={styles.data__container}>{/*2!!!!!!!!!!!!!!!!!!!!!!!*/}
                <h3>Имя пользователя: kamui213</h3>
                <h3>ID пользователя: 32</h3>
                <div className={styles.team_registration}>
                    <input className={styles.input}
                        type="text"
                        placeholder="Введите id пользователя"
                        onChange={event => edit('id', event)}/>
                    <input className={styles.input}
                        type="text"
                        placeholder="Введите название команды"
                        onChange={event => edit('teamName', event)}/>
                    <button>Подтвердить</button>
                </div>
            </div>
            <div className={styles.form}>{/*3!!!!!!!!!!!!!!!!!!!*/}
                <h2>Список команд</h2>
                <ul className={styles.list__teams}>
                    <li>Hummus</li>
                    <li>Pita</li>
                    <li>Green salad</li>
                    {/*Здесь надо будет вставить потом список команд, который я сделаю в todos*/}
                </ul>
            </div>
        </div>
    );
};

export default Profil;