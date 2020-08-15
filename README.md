# ZV gRPC Web Build

This project implements an NPM CLI wrapper tool for [protoc](https://www.npmjs.com/package/protoc). It can be used to generate TypeScript gRPC Web clients using NPM run scripts.

## Usage

```
$ zv-grpc-web-build

Options:
  --version     Show version number                                    [boolean]
  -d, --dir     Source directory                             [string] [required]
  -o, --out     Output directory                             [string] [required]
  -e, --ext     Proto file extensions              [array] [default: [".proto"]]
  -b, --binary  Binary protocol ("grpcweb" instead of "grpcwebtext")
                                                      [boolean] [default: false]
  -h, --help    Show help                                              [boolean]

```
## Features

* Pure NodeJS wrapper script (works on all platforms supporting NodeJS and protoc)
* Searches source directory recursively for proto files
* Generates TypeScript gRPC Web clients using `protoc`
* Appends `/* eslint-disable */` to the beginning of JS files

## Use case

This script is intended to be used in NPM run scripts.

