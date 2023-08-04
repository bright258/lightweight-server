export abstract class Server {

  hostname: string;
  port: string;


  constructor(hostname: string, port: string) {
    this.hostname = hostname;
    this.port = port
  }

  private indicateThatServerIsLoading(): boolean {
    console.log( 'Server is loading')
    return true;
  }

  
  public createServer(createServerPlugin: Function): void {
    this.indicateThatServerIsLoading();
    createServerPlugin(this.hostname, this.port)


    

  }
  
}
