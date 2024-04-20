import fs from "fs";
import csv from "csvtojson";
import { Transform } from "stream";

function pipeTransform() {
  const readStream = fs.createReadStream("./data/data.csv");
  readStream
    .pipe(csv({ delimiter: ";" }, { objectMode: true }))
    .pipe(
      new Transform({
        objectMode: true,
        transform(chunk, enc, callback) {
          console.log("dataChunk", chunk);
        },
      })
    )
    .on("data", (data) => console.log("=>", data));
}

pipeTransform();
