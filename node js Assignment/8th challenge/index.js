// event module

const events = require('events');

const eventEmitter = new events();

eventEmitter.on('subscribe', (data)=>{
    console.log(`Thanks for Subscribing to ${data}`);
})


eventEmitter.emit('subscribe', "College Wallah")