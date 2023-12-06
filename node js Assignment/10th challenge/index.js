//event module
const events = require('events');

const eventEmitter = new events();

eventEmitter.on('subscribe', (data)=>{
    console.log(`Thanks for Subscribing to ${data}`);
})


eventEmitter.emit('subscribe', "College Wallah")

console.log(
    `The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
  );
  
  const updatedListener = eventEmitter.setMaxListeners(5);
  
  console.log(
    `The updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
  );