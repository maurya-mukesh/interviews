import fs from "fs";

const main = async () => {
  const readStream = fs.createReadStream("./dist/data.csv");

  readStream.on("data", (buffer) => {
    console.log("===========data buffer===========");
    console.log(buffer.toString());
  });
  readStream.on("end", () => {
    console.log("stream ended====");
  });
};

main();
