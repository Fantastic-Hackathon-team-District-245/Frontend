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
    // completeTodo(id) {
    //     this.todos = this.todos.map(todo => todo.id == id ? {...todo, completed: !todo.completed} : todo);
    // }
}

export default new Todo()