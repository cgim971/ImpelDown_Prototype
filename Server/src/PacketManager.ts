import { impelDown_Prototype } from "./packet/packet";
import { PacketHandler } from "./packet/PacketHandler";
import CEnterHandler from "./packet/CEnterHandler";
import CMoveHandler from "./packet/CMoveHandler";

interface HandlerDictionary {
    [key: number]: PacketHandler;
}

export default class PacketManager {
    static Instance: PacketManager;
    handlerMap: HandlerDictionary;

    constructor() {
        console.log("Packet Manager initialize...");
        this.handlerMap = {};
        this.register();
    }

    register(): void {
        this.handlerMap[impelDown_Prototype.MSGID.C_ENTER] = new CEnterHandler();
        this.handlerMap[impelDown_Prototype.MSGID.C_MOVE] = new CMoveHandler();
    }
}   