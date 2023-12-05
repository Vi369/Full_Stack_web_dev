const fs = require('fs');

const nodeData = `The Node.js architecture is based on a single-threaded event loop. This means that the Node.js engine can only execute one task at a time. However, the event loop is very efficient at handling asynchronous tasks. When a task is submitted to the event loop, it is added to a queue. The event loop then checks the queue for tasks that are ready to be executed. When a task is ready, the event loop executes it and then removes it from the queue.
This event-driven architecture makes Node.js very efficient at handling concurrent requests. For example, a web server written in Node.js can handle multiple concurrent requests without having to spawn a new thread for each request. This makes Node.js a very scalable platform for developing high-performance web applications.
In addition to its event-driven architecture, Node.js also has a number of other features that make it a popular choice for developing server-side applications. These features include:
A rich ecosystem of modules and frameworks
Support for a variety of databases
A built-in HTTP server
A fast and efficient JavaScript engine
If you are looking for a lightweight and efficient platform for developing server-side applications, Node.js is a great option. It is easy to learn and use, and it has a large and active community that can provide support and guidance.`

fs.writeFile("nodejs_architecture.txt",nodeData,(error)=>{
    if(error){
        return console.log(error);
    }
    console.log("task successful");
})


