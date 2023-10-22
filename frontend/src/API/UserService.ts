// Получение информации о юзере/юзерах
import HTTPService from "./HTTPService.ts";

// TODO: ДОБАВИТЬ ПУТИ ВО ВСЕ ЗАПРОСЫ СОГЛАСНО БЭКЕНДУ


class UserService extends HTTPService {
    public constructor() {
        super("");
    }

    public getAllUsers() {
        return this.GET("")
    }

    public getserirById(id) {
        this.GET(`${id}`)
    }

    public postUser(user) {
        this.POST("", user)
    }
}