import * as http from 'http';
import * as fs from 'fs';



export const createNodeServer = (hostname: string, port: number)=>{
  fs.readFile('./index.html', (err, html)=> {

   const serve = http.createServer((req, res)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.end(html.toString('utf8'));
    
  })
  serve.listen(port, hostname, ()=>{
    console.log("readyyyyyyyyy, listening on port " + port)
  })

})

 
 
  
}

 
