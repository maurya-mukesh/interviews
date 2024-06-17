import express from "express";
const route = express.Router();

route.get("/:userName", (req, res) => {
	return res
		.status(200)
		.send({ userName: req.params.userName, foo: req.query.foo, bar: req.query.bar });
});
export default route;
