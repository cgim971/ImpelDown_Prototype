import Express, { Application } from 'express'
import { IncomingMessage } from 'http';
import WS, { RawData } from 'ws';
import MapManager from './MapManager';
import { impelDown_Prototype } from './packet/packet';
import Path from 'path';
import PacketManager from './PacketManager';
import SessionManager from './SessionManager';
import SocketSession from './SocketSession';
import JobTimer from './JobTimer';
import TailManager from './TailManager';

const App: Application = Express();
const httpServer = App.listen(50000, () => {
    console.log("Server is running on 50000 port");
});

const socketServer: WS.Server = new WS.Server({
    server: httpServer,
}, () => {
    console.log("Socket server is running on 50000 port");
});

PacketManager.Instance = new PacketManager();
MapManager.Instance = new MapManager(Path.join(__dirname, "Tilemap.txt"));
SessionManager.Instance = new SessionManager();
TailManager.Instance = new TailManager();

let playerId: number = 1;

socketServer.on("connection", (soc: WS, req: IncomingMessage) => {

    const id: number = playerId;
    let session: SocketSession = new SocketSession(soc, id, () => {
        SessionManager.Instance.removeSession(id);
        return;
    });

    SessionManager.Instance.addSession(session, id);
    console.log(`플레이어 ${id} 접속`);

    let spawnPosition = MapManager.Instance.getRandomSpawnPosition();
    let msg = new impelDown_Prototype.S_Init({ playerId: playerId, spawnPosition: spawnPosition });
    session.sendData(msg.serialize(), impelDown_Prototype.MSGID.S_INIT);

    TailManager.Instance.addTail(id);
    
    playerId++;

    soc.on("message", (data: RawData, isBinary: boolean) => {
        if (isBinary == true) {
            session.receiveMsg(data);
        }
    });
});


let moveTimer = new JobTimer(40, ()=>{
    let list = SessionManager.Instance.getPlayerList();
    let data = new impelDown_Prototype.S_PlayerList({playerList:list});
    SessionManager.Instance.broadCastMessage(data.serialize(), impelDown_Prototype.MSGID.S_PLAYERLIST);
});

moveTimer.startTimer();