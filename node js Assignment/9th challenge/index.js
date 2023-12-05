// event module

const events = require('events');

const eventEmitter = new events();

eventEmitter.on('subscribe', (data)=>{
    console.log(`Thanks for Subscribing to ${data}`);
})


eventEmitter.emit('subscribe', "College Wallah")

eventEmitter.removeListener('subscribe');

eventEmitter.emit('subscribe', "College Wallah") // reciving error

/** 
 * node:internal/validators:440   
 throw new ERR_INVALID_ARG_TYPE(name, 'Function', value);
*/
