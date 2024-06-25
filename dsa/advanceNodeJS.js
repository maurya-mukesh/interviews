// process.env.UV_THREADPOOL_SIZE = 5;

// const crypto = require("crypto");
// const os = require("os");
// console.log(os.cpus());
let start = Date.now();

// crypto.pbkdf2("a", "b", 50000, 512, "sha512", () => {
// 	console.log("1:", Date.now() - start);
// });
// crypto.pbkdf2("a", "b", 50000, 512, "sha512", () => {
// 	console.log("2:", Date.now() - start);
// });
// crypto.pbkdf2("a", "b", 50000, 512, "sha512", () => {
// 	console.log("3:", Date.now() - start);
// });
// crypto.pbkdf2("a", "b", 50000, 512, "sha512", () => {
// 	console.log("4:", Date.now() - start);
// });
// crypto.pbkdf2("a", "b", 50000, 512, "sha512", () => {
// 	console.log("5:", Date.now() - start);
// });

const http = require("http");
const crypto = require("crypto");
const fs = require("fs");

function doHttpRequest() {
	const start = Date.now();

	http
		.request("http://www.google.com", (res) => {
			res.on("data", () => {
				console.log();
			});
			res.on("end", () => {
				console.log("http:", Date.now() - start);
			});
		})
		.end();
}

function doHash() {
	crypto.pbkdf2("a", "b", 10000, 512, "sha512", () => {
		console.log("sha:", Date.now() - start);
	});
}

doHttpRequest();

fs.readFile("./advanceNodeJS.js", "utf8", () => {
	console.log("fs: read File", Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();
