import {action, makeAutoObservable, observable} from "mobx";

class Todo {
    todos = [{id: 1, date: "12.12.23", title: "sasha", completed: "НЕ НАЧАЛСЯ"},]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todos.push(todo);
        console.log(todo);
    }
    removeTodo(id) {
       this.todos = this.todos.filter(todo => todo.id != id);
    }
}

export default new Todo()