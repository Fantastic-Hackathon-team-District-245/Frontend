import React, {useState} from 'react';
import styles from "./Turnir.module.css"
import todo from "../../store/todo";
import {useSearchParams} from "react-router-dom";
import BurgerNavigation from "../UI/BurgerNavigation/BurgerNavigation";
import Modal from "../Modal/Modal"
import {Data} from "../../store/Data"

const Turnir = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [modalActive, setModalActive] = useState(false);
    const [data, setData] = useState(new Data());

    function edit(prop, event) {
        setData({...data, ...{[prop]: event.target.value}});
    }
    function handler() {
        todo.addTodo(data);
    }
    function start() {
        //функция для начала турнира
    }

    return (
        <div>
            <header className={styles.header}>
                <div className={styles.data}>Создатель: {todo.todos[id].title}</div>
                <div className={styles.data}>Дата проведения: {todo.todos[id].date}</div>
                <div className={styles.data}>Статус: {todo.todos[id].completed}</div>
            </header>
            <BurgerNavigation/>
            <Modal active={modalActive} setActive={setModalActive}>
                <input type="text"
                       placeholder="Введите пароль"
                       value={data.title}
                       onChange={event => edit('title', event)}/>
                <input type="text"
                       placeholder="Введите дату"
                       value={data.date}
                       onChange={event => edit('date', event)}/>
                <button onClick={handler}>+</button>
            </Modal>
            <div className={styles.form}>
                <h2>Список команд</h2>
                <ul className={styles.list}>
                    <li>Hummus</li>
                    <li>Pita</li>
                    <li>Green salad</li>
                    <li>Halloumi</li>
                    <li>Hummus</li>
                    <li>Pita</li>
                    <li>Green salad</li>
                    <li>Halloumi</li>
                    <li>Hummus</li>
                    <li>Pita</li>
                    <li>Green salad</li>
                    <li>Halloumi</li><li>Hummus</li>
                    <li>Pita</li>
                    <li>Green salad</li>
                    <li>Halloumi</li>
                    {/*Здесь надо будет вставить потом список команд, который я сделаю в todos*/}
                </ul>
                <button className="open-btn" onClick={() => setModalActive(true)}>Записаться на турнир</button>
            </div>
            <div className={styles.turnir__grid__container}>
                <h2>Сетка турнира</h2>
                <div className={styles.turnir__grid}></div>
                <button onClick={start}>Начать турнир</button>
            </div>
        </div>
    );
};

export default Turnir;