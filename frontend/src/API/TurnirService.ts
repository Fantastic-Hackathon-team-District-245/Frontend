// Получение информации о турнире/турнирах
import HTTPService from "./HTTPService.ts";

// TODO: ДОБАВИТЬ ПУТИ ВО ВСЕ ЗАПРОСЫ СОГЛАСНО БЭКЕНДУ


class TurnirService extends HTTPService {
    public constructor() {
        super("");
    }

    public getAllTurnirs() {
        return this.GET("")
    }

    public getTurnirById(id) {
        this.GET(`${id}`)
    }

    public postTurnir(turnir) {
        this.POST("", turnir)
    }
}