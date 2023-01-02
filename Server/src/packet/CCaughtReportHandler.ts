import SessionManager from "../SessionManager";
import SocketSession from "../SocketSession";
import TailManager from "../TailManager";
import { impelDown_Prototype } from "./packet";
import { PacketHandler } from "./PacketHandler";

export default class CCaughtReportHandler implements PacketHandler {
    handleMsg(session: SocketSession, buffer: Buffer): void {
        let cCaughtReport = impelDown_Prototype.C_CaughtReport.deserialize(buffer);

        // 잡은 사람 |  잡힌 사람
        let { playerId, caughtPlayerId } = cCaughtReport;

        if (!TailManager.Instance.compareTail(playerId, caughtPlayerId)) return;

        let sDead = new impelDown_Prototype.S_Dead({ playerId: caughtPlayerId });
        SessionManager.Instance.broadCastMessage(sDead.serialize(), impelDown_Prototype.MSGID.S_DEAD);
        SessionManager.Instance.removeSession(caughtPlayerId);

        let sCaughtConfirm = new impelDown_Prototype.S_CaughtConfirm({ playerId: caughtPlayerId, catchPlayerId: playerId });
        SessionManager.Instance.broadCastMessage(sCaughtConfirm.serialize(), impelDown_Prototype.MSGID.S_CAUGHT_CONFIRM, caughtPlayerId);
    }
}   