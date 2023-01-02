import { WebSocketServer } from "ws";
import { impelDown_Prototype } from "./packet/packet";
import SocketSession from "./SocketSession";


export default class TailManager {
    static Instance: TailManager;

    tailDictionary: number[];
    playerCount: number;

    constructor() {
        this.tailDictionary = [];
        this.playerCount = 0;
    }

    addTail(id: number): void {
        this.tailDictionary[id] = id - 1;
    }

    removeTail(id: number): void {
        this.tailDictionary[id] = 0;
        for (let i = id; i < this.tailDictionary.length - 1; i++) {
            this.tailDictionary[i] = this.tailDictionary[i + 1];
        }
        delete this.tailDictionary[id];
    }

    getTailCount(): number {
        return this.tailDictionary.length;
    }

    compareTail(playerId: number, caughtPlayerId: number): boolean {

        let id: number = this.tailDictionary[playerId];
        if (id == 0) {
            id = this.getTailCount()-1;
        }

        if (id == caughtPlayerId) {
            this.tailDictionary[playerId] = this.tailDictionary[caughtPlayerId];
            return true;
        }

        return false;
    }
}