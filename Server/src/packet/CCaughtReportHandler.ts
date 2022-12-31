import SessionManager from "../SessionManager";
import SocketSession from "../SocketSession";
import { impelDown_Prototype } from "./packet";
import { PacketHandler } from "./PacketHandler";

export default class CCaughtReportHandler implements PacketHandler {
    handleMsg(session: SocketSession, buffer: Buffer): void {
        let cCaughtReport = impelDown_Prototype.C_CaughtReport.deserialize(buffer);

        let { playerId, caughtPlayerId } = cCaughtReport;
        
        // 잡은 사람
        let playerSocket = SessionManager.Instance.getSession(playerId);
        // 잡힌 사람
        let caughtPlayerSocket = SessionManager.Instance.getSession(caughtPlayerId);

        if(playerSocket.tail_front != caughtPlayerSocket.tail_back) return;
        // 꼬리 변경 해줘야 함
        playerSocket.tail_front = caughtPlayerSocket.tail_front;        

        
        let sCaughtConfirm = new impelDown_Prototype.S_CaughtConfirm({playerId:caughtPlayerId, catchPlayerId:playerId});
        SessionManager.Instance.broadCastMessage(sCaughtConfirm.serialize(), impelDown_Prototype.MSGID.S_CAUGHT_CONFIRM, caughtPlayerId);
    }
}