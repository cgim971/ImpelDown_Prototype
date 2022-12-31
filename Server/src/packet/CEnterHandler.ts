import SessionManager from "../SessionManager";
import SocketSession from "../SocketSession";
import { impelDown_Prototype } from "./packet";
import { PacketHandler } from "./PacketHandler";

export default class CEnterHandler implements PacketHandler {
    handleMsg(session: SocketSession, buffer: Buffer): void {
        let cEnter = impelDown_Prototype.C_Enter.deserialize(buffer);

        session.isEnter = true;
        // 새로 들어오면 포지션을 변경하고
        session.position = cEnter.position;

        session.tail_front = session.tail_back = session.playerId;
        
        
        // 정보를 생성 후
        let info = new impelDown_Prototype.PlayerInfo({ playerId: session.playerId, position: session.position,tailNo: session.tail_back });
        // 넣는다.
        let sEnter = new impelDown_Prototype.S_Enter({ playerInfo: info });

        // 이 내용을 모두에게 뿌려줌
        SessionManager.Instance.broadCastMessage(sEnter.serialize(), impelDown_Prototype.MSGID.S_ENTER, session.playerId, true);

        let list = SessionManager.Instance.getPlayerList();
        let initMsg = new impelDown_Prototype.S_InitList({playerList:list});
        session.sendData(initMsg.serialize(), impelDown_Prototype.MSGID.S_INITLIST);
    }
}           