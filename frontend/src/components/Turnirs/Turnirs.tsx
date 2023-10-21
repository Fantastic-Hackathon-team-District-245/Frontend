import React, {useState} from 'react';
import {observer} from "mobx-react";
import todo from "../../store/todo"
import Modal from "../Modal/Modal";
import {Table} from "antd";

const Turnirs = () => {
    const [modalActive, setModalActive] = useState(false);
    const [data, setData] = useState({
        id: " ",
        title: " ",
        date: " ",
        completed: "НЕ НАЧАЛСЯ"
    });

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'TITLE',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'DATE',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'COMPLETED',
            dataIndex: 'completed',
            key: 'completed',
        }
    ];

    function edit(prop, event) {
        setData({...data, ...{[prop]: event.target.value}});
    }
    function handler() {
        todo.addTodo(data);
    }

    return (
        <div>
            <Table dataSource={todo.todos} columns={columns}/>
            <button className="open-btn" onClick={() => setModalActive(true)}>+</button>
            <Modal active={modalActive} setActive={setModalActive}>
                <input type="text"
                       placeholder="Введите пароль"
                       value={data.id}
                       onChange={event => edit('id', event)}/>
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
        </div>
    );
};

export default observer(Turnirs);