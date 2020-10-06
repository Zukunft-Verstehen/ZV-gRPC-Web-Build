import * as jspb from "google-protobuf"

export class Test extends jspb.Message {
  getI(): number;
  setI(value: number): void;

  getStr(): string;
  setStr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Test.AsObject;
  static toObject(includeInstance: boolean, msg: Test): Test.AsObject;
  static serializeBinaryToWriter(message: Test, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Test;
  static deserializeBinaryFromReader(message: Test, reader: jspb.BinaryReader): Test;
}

export namespace Test {
  export type AsObject = {
    i: number,
    str: string,
  }
}

export class TestResp extends jspb.Message {
  getI(): number;
  setI(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestResp.AsObject;
  static toObject(includeInstance: boolean, msg: TestResp): TestResp.AsObject;
  static serializeBinaryToWriter(message: TestResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestResp;
  static deserializeBinaryFromReader(message: TestResp, reader: jspb.BinaryReader): TestResp;
}

export namespace TestResp {
  export type AsObject = {
    i: number,
  }
}

