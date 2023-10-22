// Получение информации о матче/матчах

import HTTPService from "./HTTPService.ts";

// TODO: ДОБАВИТЬ ПУТИ ВО ВСЕ ЗАПРОСЫ СОГЛАСНО БЭКЕНДУ


class GameService extends HTTPService {
    public constructor() {
        super("");
    }

    public getAllGames() {
        return this.GET("")
    }

    public getGameById(id) {
        this.GET(`${id}`)
    }

    public postGame(game) {
        this.POST("", game)
    }

    public updateGame(game) {
        this.PUT("", game)
    }
}