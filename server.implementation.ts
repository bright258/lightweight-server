import {Server} from './server.main';
import {createNodeServer} from './node.server.implementation';
import * as dotenv from 'dotenv';
dotenv.config()




export class ServerImplementation extends Server {
  constructor(hostname: string, port: string){
    super(hostname, port);
  }

  
}

const  server = new ServerImplementation(process.env.hostname!, process.env.port!)

server.createServer(createNodeServer)
