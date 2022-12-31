import SessionManager from "../SessionManager";
import SocketSession from "../SocketSession";
import { impelDown_Prototype } from "./packet";
import { PacketHandler } from "./PacketHandler";

export default class CDeadHandler implements PacketHandler {
    handleMsg(session: SocketSession, buffer: Buffer): void {
        let cDead = impelDown_Prototype.C_Dead.deserialize(buffer);
        let sDead = new impelDown_Prototype.S_Dead({ playerId: cDead.playerId });
        // SessionManager.Instance.broadCastMessage(sDead.serialize(), impelDown_Prototype.MSGID.S_DEAD, cDead.playerId, true);
    }
}