const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('Night', () => {
    console.log('Please toun on the lights!');
    setTimeout(() =>{
      console.log("This is gentle reminder to you")
    },3000)
});
console.log("Script is running");
myEmitter.emit('Night');
console.log("Script is still running");
myEmitter.emit('Night');

