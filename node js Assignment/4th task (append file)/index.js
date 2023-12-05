const fs = require('fs');

const data = `Here are some of the advantages of Node.js:
High performance:
Node.js is very fast and can handle a large number of concurrent requests. This is due to its use of the V8 JavaScript engine and its event-driven, non-blocking I/O model.
Scalability:
Node.js is very scalable and can be easily scaled up or down to meet the demands of your application. This is because Node.js uses a single thread to handle all requests, which makes it very efficient.
Flexibility:
Node.js is very flexible and can be used to develop a wide variety of applications. This is because Node.js has a large ecosystem of modules and frameworks that can be used to extend its functionality.
Community support:
Node.js has a large and active community that is constantly developing new modules and frameworks. This makes it easy to find help and support when you need it.
Cost-effective:
Node.js is a free and open-source software, so it is very cost-effective to use.`

fs.appendFileSync("node_architecture.txt", data);

fs.readFile("node_architecture.txt", (error, content)=>{
    if(error){
        return console.log(error);
    }
    console.log("read content is: " + content);
})
