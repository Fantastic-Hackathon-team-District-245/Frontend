import {action, makeAutoObservable, observable} from "mobx";
import {Data} from "./Data";


interface ITodo {
    todos: Array<Data>;

    addTodo(todo: Data): void;
    removeTodo(id: number): void;
}

class Todo implements ITodo {
    todos = [{id: 1, date: "12.12.23", title: "sasha", completed: "НЕ НАЧАЛСЯ"}]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo: Data) {
        this.todos.push(todo);
        console.log(todo);
    }
    removeTodo(id: number) {
       this.todos = this.todos.filter(todo => todo.id != id);
    }
}

export default new Todo();