const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("hello", callbackHello);
emitter.on("by", callbackBy);

function callbackBy(name) {
  console.log("good by world " + name);
}

function callbackHello(name) {
  console.log("hello world " + name);
}

emitter.emit("hello", "mukesh");
emitter.emit("by", "Aditya");
