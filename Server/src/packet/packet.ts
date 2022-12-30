/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: packet.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace impelDown_Prototype {
    export enum MSGID {
        S_ENTER = 0,
        S_INIT = 1,
        C_ENTER = 2,
        S_INITLIST = 3,
        C_MOVE = 4,
        S_PLAYERLIST = 5,
        S_LEAVE = 6
    }
    export class PlayerInfo extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            playerId?: number;
            position?: Position;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("playerId" in data && data.playerId != undefined) {
                    this.playerId = data.playerId;
                }
                if ("position" in data && data.position != undefined) {
                    this.position = data.position;
                }
            }
        }
        get playerId() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set playerId(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get position() {
            return pb_1.Message.getWrapperField(this, Position, 2) as Position;
        }
        set position(value: Position) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_position() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            playerId?: number;
            position?: ReturnType<typeof Position.prototype.toObject>;
        }): PlayerInfo {
            const message = new PlayerInfo({});
            if (data.playerId != null) {
                message.playerId = data.playerId;
            }
            if (data.position != null) {
                message.position = Position.fromObject(data.position);
            }
            return message;
        }
        toObject() {
            const data: {
                playerId?: number;
                position?: ReturnType<typeof Position.prototype.toObject>;
            } = {};
            if (this.playerId != null) {
                data.playerId = this.playerId;
            }
            if (this.position != null) {
                data.position = this.position.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.playerId != 0)
                writer.writeInt32(1, this.playerId);
            if (this.has_position)
                writer.writeMessage(2, this.position, () => this.position.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PlayerInfo {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerInfo();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.playerId = reader.readInt32();
                        break;
                    case 2:
                        reader.readMessage(message.position, () => message.position = Position.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): PlayerInfo {
            return PlayerInfo.deserialize(bytes);
        }
    }
    export class Position extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            x?: number;
            y?: number;
            dinoScaleX?: number;
            gunScaleY?: number;
            gunRotate?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("x" in data && data.x != undefined) {
                    this.x = data.x;
                }
                if ("y" in data && data.y != undefined) {
                    this.y = data.y;
                }
                if ("dinoScaleX" in data && data.dinoScaleX != undefined) {
                    this.dinoScaleX = data.dinoScaleX;
                }
                if ("gunScaleY" in data && data.gunScaleY != undefined) {
                    this.gunScaleY = data.gunScaleY;
                }
                if ("gunRotate" in data && data.gunRotate != undefined) {
                    this.gunRotate = data.gunRotate;
                }
            }
        }
        get x() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set x(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get y() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set y(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get dinoScaleX() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set dinoScaleX(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get gunScaleY() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set gunScaleY(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        get gunRotate() {
            return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
        }
        set gunRotate(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            x?: number;
            y?: number;
            dinoScaleX?: number;
            gunScaleY?: number;
            gunRotate?: number;
        }): Position {
            const message = new Position({});
            if (data.x != null) {
                message.x = data.x;
            }
            if (data.y != null) {
                message.y = data.y;
            }
            if (data.dinoScaleX != null) {
                message.dinoScaleX = data.dinoScaleX;
            }
            if (data.gunScaleY != null) {
                message.gunScaleY = data.gunScaleY;
            }
            if (data.gunRotate != null) {
                message.gunRotate = data.gunRotate;
            }
            return message;
        }
        toObject() {
            const data: {
                x?: number;
                y?: number;
                dinoScaleX?: number;
                gunScaleY?: number;
                gunRotate?: number;
            } = {};
            if (this.x != null) {
                data.x = this.x;
            }
            if (this.y != null) {
                data.y = this.y;
            }
            if (this.dinoScaleX != null) {
                data.dinoScaleX = this.dinoScaleX;
            }
            if (this.gunScaleY != null) {
                data.gunScaleY = this.gunScaleY;
            }
            if (this.gunRotate != null) {
                data.gunRotate = this.gunRotate;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.x != 0)
                writer.writeFloat(1, this.x);
            if (this.y != 0)
                writer.writeFloat(2, this.y);
            if (this.dinoScaleX != 0)
                writer.writeFloat(3, this.dinoScaleX);
            if (this.gunScaleY != 0)
                writer.writeFloat(4, this.gunScaleY);
            if (this.gunRotate != 0)
                writer.writeFloat(5, this.gunRotate);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Position {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Position();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.x = reader.readFloat();
                        break;
                    case 2:
                        message.y = reader.readFloat();
                        break;
                    case 3:
                        message.dinoScaleX = reader.readFloat();
                        break;
                    case 4:
                        message.gunScaleY = reader.readFloat();
                        break;
                    case 5:
                        message.gunRotate = reader.readFloat();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Position {
            return Position.deserialize(bytes);
        }
    }
    export class S_Init extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            playerId?: number;
            spawnPosition?: Position;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("playerId" in data && data.playerId != undefined) {
                    this.playerId = data.playerId;
                }
                if ("spawnPosition" in data && data.spawnPosition != undefined) {
                    this.spawnPosition = data.spawnPosition;
                }
            }
        }
        get playerId() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set playerId(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get spawnPosition() {
            return pb_1.Message.getWrapperField(this, Position, 2) as Position;
        }
        set spawnPosition(value: Position) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_spawnPosition() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            playerId?: number;
            spawnPosition?: ReturnType<typeof Position.prototype.toObject>;
        }): S_Init {
            const message = new S_Init({});
            if (data.playerId != null) {
                message.playerId = data.playerId;
            }
            if (data.spawnPosition != null) {
                message.spawnPosition = Position.fromObject(data.spawnPosition);
            }
            return message;
        }
        toObject() {
            const data: {
                playerId?: number;
                spawnPosition?: ReturnType<typeof Position.prototype.toObject>;
            } = {};
            if (this.playerId != null) {
                data.playerId = this.playerId;
            }
            if (this.spawnPosition != null) {
                data.spawnPosition = this.spawnPosition.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.playerId != 0)
                writer.writeInt32(1, this.playerId);
            if (this.has_spawnPosition)
                writer.writeMessage(2, this.spawnPosition, () => this.spawnPosition.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): S_Init {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new S_Init();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.playerId = reader.readInt32();
                        break;
                    case 2:
                        reader.readMessage(message.spawnPosition, () => message.spawnPosition = Position.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): S_Init {
            return S_Init.deserialize(bytes);
        }
    }
    export class C_Enter extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            position?: Position;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("position" in data && data.position != undefined) {
                    this.position = data.position;
                }
            }
        }
        get position() {
            return pb_1.Message.getWrapperField(this, Position, 1) as Position;
        }
        set position(value: Position) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_position() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            position?: ReturnType<typeof Position.prototype.toObject>;
        }): C_Enter {
            const message = new C_Enter({});
            if (data.position != null) {
                message.position = Position.fromObject(data.position);
            }
            return message;
        }
        toObject() {
            const data: {
                position?: ReturnType<typeof Position.prototype.toObject>;
            } = {};
            if (this.position != null) {
                data.position = this.position.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_position)
                writer.writeMessage(1, this.position, () => this.position.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): C_Enter {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new C_Enter();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.position, () => message.position = Position.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): C_Enter {
            return C_Enter.deserialize(bytes);
        }
    }
    export class S_Enter extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            playerInfo?: PlayerInfo;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("playerInfo" in data && data.playerInfo != undefined) {
                    this.playerInfo = data.playerInfo;
                }
            }
        }
        get playerInfo() {
            return pb_1.Message.getWrapperField(this, PlayerInfo, 1) as PlayerInfo;
        }
        set playerInfo(value: PlayerInfo) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_playerInfo() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            playerInfo?: ReturnType<typeof PlayerInfo.prototype.toObject>;
        }): S_Enter {
            const message = new S_Enter({});
            if (data.playerInfo != null) {
                message.playerInfo = PlayerInfo.fromObject(data.playerInfo);
            }
            return message;
        }
        toObject() {
            const data: {
                playerInfo?: ReturnType<typeof PlayerInfo.prototype.toObject>;
            } = {};
            if (this.playerInfo != null) {
                data.playerInfo = this.playerInfo.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_playerInfo)
                writer.writeMessage(1, this.playerInfo, () => this.playerInfo.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): S_Enter {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new S_Enter();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.playerInfo, () => message.playerInfo = PlayerInfo.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): S_Enter {
            return S_Enter.deserialize(bytes);
        }
    }
    export class S_Leave extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            playerId?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("playerId" in data && data.playerId != undefined) {
                    this.playerId = data.playerId;
                }
            }
        }
        get playerId() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set playerId(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            playerId?: number;
        }): S_Leave {
            const message = new S_Leave({});
            if (data.playerId != null) {
                message.playerId = data.playerId;
            }
            return message;
        }
        toObject() {
            const data: {
                playerId?: number;
            } = {};
            if (this.playerId != null) {
                data.playerId = this.playerId;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.playerId != 0)
                writer.writeInt32(1, this.playerId);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): S_Leave {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new S_Leave();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.playerId = reader.readInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): S_Leave {
            return S_Leave.deserialize(bytes);
        }
    }
    export class C_Move extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            playerId?: number;
            position?: Position;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("playerId" in data && data.playerId != undefined) {
                    this.playerId = data.playerId;
                }
                if ("position" in data && data.position != undefined) {
                    this.position = data.position;
                }
            }
        }
        get playerId() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set playerId(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get position() {
            return pb_1.Message.getWrapperField(this, Position, 2) as Position;
        }
        set position(value: Position) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_position() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            playerId?: number;
            position?: ReturnType<typeof Position.prototype.toObject>;
        }): C_Move {
            const message = new C_Move({});
            if (data.playerId != null) {
                message.playerId = data.playerId;
            }
            if (data.position != null) {
                message.position = Position.fromObject(data.position);
            }
            return message;
        }
        toObject() {
            const data: {
                playerId?: number;
                position?: ReturnType<typeof Position.prototype.toObject>;
            } = {};
            if (this.playerId != null) {
                data.playerId = this.playerId;
            }
            if (this.position != null) {
                data.position = this.position.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.playerId != 0)
                writer.writeInt32(1, this.playerId);
            if (this.has_position)
                writer.writeMessage(2, this.position, () => this.position.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): C_Move {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new C_Move();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.playerId = reader.readInt32();
                        break;
                    case 2:
                        reader.readMessage(message.position, () => message.position = Position.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): C_Move {
            return C_Move.deserialize(bytes);
        }
    }
    export class S_InitList extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            playerList?: PlayerInfo[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("playerList" in data && data.playerList != undefined) {
                    this.playerList = data.playerList;
                }
            }
        }
        get playerList() {
            return pb_1.Message.getRepeatedWrapperField(this, PlayerInfo, 1) as PlayerInfo[];
        }
        set playerList(value: PlayerInfo[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            playerList?: ReturnType<typeof PlayerInfo.prototype.toObject>[];
        }): S_InitList {
            const message = new S_InitList({});
            if (data.playerList != null) {
                message.playerList = data.playerList.map(item => PlayerInfo.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                playerList?: ReturnType<typeof PlayerInfo.prototype.toObject>[];
            } = {};
            if (this.playerList != null) {
                data.playerList = this.playerList.map((item: PlayerInfo) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.playerList.length)
                writer.writeRepeatedMessage(1, this.playerList, (item: PlayerInfo) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): S_InitList {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new S_InitList();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.playerList, () => pb_1.Message.addToRepeatedWrapperField(message, 1, PlayerInfo.deserialize(reader), PlayerInfo));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): S_InitList {
            return S_InitList.deserialize(bytes);
        }
    }
    export class S_PlayerList extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            playerList?: PlayerInfo[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("playerList" in data && data.playerList != undefined) {
                    this.playerList = data.playerList;
                }
            }
        }
        get playerList() {
            return pb_1.Message.getRepeatedWrapperField(this, PlayerInfo, 1) as PlayerInfo[];
        }
        set playerList(value: PlayerInfo[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            playerList?: ReturnType<typeof PlayerInfo.prototype.toObject>[];
        }): S_PlayerList {
            const message = new S_PlayerList({});
            if (data.playerList != null) {
                message.playerList = data.playerList.map(item => PlayerInfo.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                playerList?: ReturnType<typeof PlayerInfo.prototype.toObject>[];
            } = {};
            if (this.playerList != null) {
                data.playerList = this.playerList.map((item: PlayerInfo) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.playerList.length)
                writer.writeRepeatedMessage(1, this.playerList, (item: PlayerInfo) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): S_PlayerList {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new S_PlayerList();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.playerList, () => pb_1.Message.addToRepeatedWrapperField(message, 1, PlayerInfo.deserialize(reader), PlayerInfo));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): S_PlayerList {
            return S_PlayerList.deserialize(bytes);
        }
    }
}
