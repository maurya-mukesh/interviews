const express = require("express");
const PORT = process.env.PORT || 5000;
const cluster = require("cluster");
const app = express();

console.log(cluster.isMaster);
if (cluster.isMaster) {
	cluster.fork();
	cluster.fork();
	cluster.fork();
	cluster.fork();
} else {
	function doWork(duration) {
		let start = Date.now();
		while (Date.now() - start < duration) {}
	}

	app.get("/", (req, res) => {
		doWork(5000);
		return res.status(200).send("hi there");
	});
	app.get("/fast", (req, res) => {
		return res.status(200).send("this is fast api");
	});

	app.listen(5000, () => {
		console.log(`Server is running on ${PORT}`);
	});
}
app.get("/", (req, res) => {
	doWork(5000);
	return res.status(200).send("hi there");
});
