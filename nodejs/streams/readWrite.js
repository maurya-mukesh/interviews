import fs from "fs";

const main = async () => {
  const readStream = fs.createReadStream("./dist/data.csv");

  const writeStream = fs.createWriteStream("./dist/export.csv");
  readStream.on("data", (buffer) => {
    console.log("===========data buffer===========");
    console.log(buffer.toString());
    writeStream.write(buffer);
  });
  readStream.on("end", () => {
    console.log("stream ended====");
    writeStream.end();
  });
};

main();
