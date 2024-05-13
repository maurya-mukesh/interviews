const EventEmitter = require("events");

const newEmitter = new EventEmitter();

newEmitter.on("myEvent", (data) => console.log("emitterData=>", data));

newEmitter.on("anotherEvent", (data) =>
  console.log("new emitter logged", data)
);

newEmitter.emit("myEvent", "new data1");
newEmitter.emit("anotherEvent", "new data2");
