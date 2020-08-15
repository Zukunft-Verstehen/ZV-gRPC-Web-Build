#!/usr/bin/env node

const yargs = require('yargs')
const path = require('path')
const cmd = require('node-cmd')
const tools = require('./tools')

const options = yargs
  .option('d', {
        alias: 'dir',
        demandOption: true,
        describe: 'Source directory',
        type: 'string'
    })
  .option('o', {
        alias: 'out',
        demandOption: true,
        describe: 'Output directory',
        type: 'string'
    })
  .option('e', {
        alias: 'ext',
        demandOption: false,
        default: [".proto"],
        describe: 'Proto file extensions',
        type: 'array'
    })
  .option('b', {
        alias: 'binary',
        demandOption: false,
        default: false,
        describe: 'Binary protocol ("grpcweb" instead of "grpcwebtext")',
        type: 'boolean'
    })
  .help('h')
  .alias('h', 'help')
  .argv

const fileFilter = (file) => options.e.includes(path.extname(file))

let files = tools.traverse(options.d, fileFilter)
let quotedFiles = files.map((file) => ('"' + file + '"'))

const mode = options.b ? "grpcweb" : "grpcwebtext" 
const protocCmd = 'protoc "-I=' + options.d + '" "--js_out=import_style=commonjs:' + options.o + '"' + 
  ' "--grpc-web_out=import_style=typescript,mode=' + mode + ':' + options.o + '" ' + quotedFiles.join(' ') 

cmd.get(protocCmd,
  function(err, data, stderr){
    if(err){
      console.log('Protoc error: ', err)
      process.exit(1)
    }
     
    const jsFilter = (file) => (path.extname(file) == ".js")      
    let jsFiles = tools.traverse(options.o, jsFilter)
    
    jsFiles.forEach((file) => {
      tools.prependToFile(file, "/* eslint-disable */\n")
    })
  }
)



