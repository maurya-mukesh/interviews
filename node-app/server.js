import express from "express";
const PORT = process.env.PORT || 5000;
import userRoute from "./route.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRoute);
// app.get("/api/user/:userName", (req, res) => {
// 	const userName = req.params.userName;
// 	const { foo, bar } = req.query;
// 	console.log("inside route", userName, foo, bar);
// 	return res.status(200).send({ userName, foo, bar });
// });

app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});
