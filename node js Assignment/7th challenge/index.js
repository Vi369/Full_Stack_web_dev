const data = "I Am Happy To Learn Full Stack Web Development From PW Skills!"

const http = require('http');


const server = http.createServer((req, res)=>{
    if(req.url =="/"){
        res.write(`<h1>${data}</h1>`)
        res.end();
    }
    else{
        res.writeHead(404);
        res.end("you are tring to hit wrong url")
    }
})

server.listen(5010, ()=>{
    console.log("server is running ")
})