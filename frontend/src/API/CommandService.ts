// Получение информации о команде/командах

import HTTPService from "./HTTPService.ts";

// TODO: ДОБАВИТЬ ПУТИ ВО ВСЕ ЗАПРОСЫ СОГЛАСНО БЭКЕНДУ


class CommandService extends HTTPService {
    public constructor() {
        super("");
    }

    public getAllCommands() {
        return this.GET("")
    }

    public getCommandById(id) {
        this.GET(`${id}`)
    }

    public postCommand(command) {
        this.POST("", command)
    }
}