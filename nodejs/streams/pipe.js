import fs from "fs";

function pipes() {
  const readStream = fs.createReadStream("./data/index.txt");
  const writeStream = fs.createWriteStream("./dist/newFile.txt");

  readStream.pipe(writeStream);
  readStream.on("end", () => console.log("reading completed"));
  writeStream.on("finish", () => console.log("writing process completed"));
}

pipes();
