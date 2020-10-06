/**
 * @fileoverview gRPC-Web generated client stub for com.zv.example.proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  Test,
  TestResp} from './Test_pb';

export class TestServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoTestCall = new grpcWeb.AbstractClientBase.MethodInfo(
    TestResp,
    (request: Test) => {
      return request.serializeBinary();
    },
    TestResp.deserializeBinary
  );

  testCall(
    request: Test,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TestResp) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/com.zv.example.proto.TestService/TestCall',
      request,
      metadata || {},
      this.methodInfoTestCall,
      callback);
  }

}

