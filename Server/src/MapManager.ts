import FS from 'fs';
import { impelDown_Prototype } from './packet/packet'

export enum MapCategory {
    PATH = 0,
    BLOCK = 1,
    SPAWNPOINT = 2
}

export default class MapManager {
    static Instance: MapManager;

    mapData: number[][] = [];
    spawnList: impelDown_Prototype.Position[] = [];
    xMin: number = 0;
    xMax: number = 0;
    yMin: number = 0;
    yMax: number = 0;

    constructor(filePath: string) {
        let fileText: string = FS.readFileSync(filePath, "utf8");
        let line: string[] = fileText.split("\r\n");
        this.xMin = parseInt(line[0]);
        this.xMax = parseInt(line[1]);
        this.yMin = parseInt(line[2]);
        this.yMax = parseInt(line[3]);

        line = line.splice(4);
        let lineCount: number = Math.abs(this.yMin) + Math.abs(this.yMax);

        for (let i = 0; i < lineCount; i++) {
            let numberArr: number[] = line[i].split("").map(x => parseInt(x));
            this.mapData.push(numberArr);
        }

        this.mapData = this.mapData.reverse();

        this.spawnList.push(
            new impelDown_Prototype.Position({ x: -13, y:7 }),
            new impelDown_Prototype.Position({ x: 12, y: 7 }),
            new impelDown_Prototype.Position({ x: -13, y: -8 }),
            new impelDown_Prototype.Position({ x: 12, y: -8 })
        );
    }

    getMapData(x: number, y: number): MapCategory {
        x += Math.abs(this.xMin);
        y += Math.abs(this.yMin);

        return this.mapData[y][x];
    }

    getRandomSpawnPosition(): impelDown_Prototype.Position {
        let idx: number = Math.floor(Math.random() * 4);
        return this.spawnList[idx];
    }
}