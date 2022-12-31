import SocketSession from "../SocketSession";
import { impelDown_Prototype } from "./packet";
import { PacketHandler } from "./PacketHandler";

export default class CMoveHandler implements PacketHandler{
    handleMsg(session: SocketSession, buffer: Buffer): void {
        let cMove= impelDown_Prototype.C_Move.deserialize(buffer);
        
        session.position = cMove.position;
    }
}