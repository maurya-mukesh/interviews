import fs from "fs";
import csv from "csvtojson";
import { Transform } from "stream";

function pipeTransform() {
  const readStream = fs.createReadStream("./data/data.csv");

  const transform = new Transform({
    objectMode: true,
    transform(chunk, enc, callback) {
      const user = {
        name: chunk.name,
        email: chunk.email,
        color: chunk.color,
        salary: Number(chunk.salary),
        isActive: chunk.isActive === "true",
      };
      callback(null, user);
    },
  });
  readStream
    .pipe(csv({ delimiter: ";" }, { objectMode: true }))
    .pipe(transform)
    .on("data", (data) => console.log("=>user", data))
    .on("error", (error) => {
      console.log("error", error);
    })
    .on("end", () => console.log("operation finished"));
}

pipeTransform();

<Route
  exact
  path="/business"
  component={() => (render) =>
    (
      <News
        setProgress={setProgress}
        apiKey={apiKey}
        key="business"
        pageSize={pageSize}
        country="in"
        category="business"
      />
    )}
/>;
