import SessionManager from "../SessionManager";
import SocketSession from "../SocketSession";
import { impelDown_Prototype } from "./packet";
import { PacketHandler } from "./PacketHandler";

export default class CCaughtReportHandler implements PacketHandler {
    handleMsg(session: SocketSession, buffer: Buffer): void {
        let cCaughtReport = impelDown_Prototype.C_Caught_Report.deserialize(buffer);

        let { playerId, caughtPlayerId } = cCaughtReport;
        
        // 잡은 사람
        let playerSocket = SessionManager.Instance.getSession(playerId);
        // 잡힌 사람
        let caughtPlayerSocket = SessionManager.Instance.getSession(caughtPlayerId);

        // 꼬리 변경 해줘야 함

        let sDead = new impelDown_Prototype.S_Dead({playerId:caughtPlayerId});
        SessionManager.Instance.broadCastMessage(sDead.serialize(), impelDown_Prototype.MSGID.S_DEAD);
    }
}