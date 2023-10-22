import React, {useState} from 'react';
import styles from "./Turnir.module.css"
import todo from "../../store/todo";
import {useSearchParams} from "react-router-dom";
import BurgerNavigation from "../UI/BurgerNavigation/BurgerNavigation";
import Modal from "../Modal/Modal"
import {Data} from "../../store/Data"
import {SingleElimination} from "../UI/Grid/Grid";

const Turnir = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [modalRegisterActive, setModalRegisterActive] = useState(false);
    const [modalRefactorActive, setModalRefactorActive] = useState(false);
    const [data, setData] = useState(new Data());
    const [isStarted, setisStarted] = useState(todo.todos[id].completed);

    function edit(prop, event) {
        setData({...data, ...{[prop]: event.target.value}});
    }
    function handler() {
        todo.addTodo(data);
    }
    function start() {
        setisStarted("ИДЁТ");
    }
    function ended() {
        setisStarted("ЗАКОНЧИЛСЯ");
    }
    function refactoring() {

    }

    return (
        <div>
            <header className={styles.header}>
                <div className={styles.data}>Создатель: {todo.todos[id].title}</div>
                <div className={styles.data}>Дата проведения: {todo.todos[id].date}</div>
                <div className={styles.data}>Статус: {todo.todos[id].completed}</div>
            </header>
            <BurgerNavigation/>

            <div className={styles.form}>
                <h2>Список команд</h2>
                <ul className={styles.list}>
                    <li>Hummus</li>
                    <li>Pita</li>
                    <li>Green salad</li>
                    {/*Здесь надо будет вставить потом список команд, который я сделаю в todos*/}
                </ul>
                <button className="open-btn" onClick={() => setModalRegisterActive(true)} disabled={isStarted != "НЕ НАЧАЛСЯ"}>Записаться на турнир</button>
            </div>

            <div className={styles.turnir__grid__container}>
                <h2>Сетка турнира</h2>
                <div className={styles.turnir__grid}>
                    {/*<WhiteThemeBracket/>*/}
                    {isStarted === "ИДЁТ" ? <SingleElimination/> : <div/>}
                    {isStarted === "ЗАКОНЧИЛСЯ" ? <h1 style={{color:'red'}}>Турнир закончился</h1> : <div/>}
                </div>
                <button onClick={start} disabled={isStarted != "НЕ НАЧАЛСЯ"}>Начать турнир</button>
                <button onClick={ended} disabled={isStarted != "ИДЁТ"}>Закончить турнир</button>
                <button className="open-btn" onClick={() => setModalRefactorActive(true)} disabled={isStarted != "ИДЁТ"}>Добавить изменения</button>
            </div>

            <Modal active={modalRegisterActive} setActive={setModalRegisterActive}>
                <input type="text"
                       placeholder="Введите название команды"
                       value={data.title}
                       onChange={event => edit('title', event)}/>
                <input type="text"
                       placeholder="Введите дату"
                       value={data.date}
                       onChange={event => edit('date', event)}/>
                <button onClick={handler}>+</button>
            </Modal>
            <Modal active={modalRefactorActive} setActive={setModalRefactorActive}>
                <input type="text"
                       placeholder="Id матча"
                       onChange={event => edit('title', event)}/>
                <input type="text"
                       placeholder="Кто победил?"
                       onChange={event => edit('date', event)}/>
                <button onClick={handler}>+</button>
            </Modal>
        </div>
    );
};

export default Turnir;