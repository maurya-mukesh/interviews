const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET_KEY;
const User = require("../model/User");

/**
 * @description: Verify token middleware
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const verifyToken = async (req, res, next) => {
  let token;
  console.log(req.param);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ error: "You are not logged in!" });
  } else {
    let decoded = {};
    await jwt.verify(token, secretKey, function (err, data) {
      if (!err) {
        decoded = data;
      } else {
        return;
      }
    });

    if (!decoded.userId) {
      return res
        .status(401)
        .json({ error: "Invalid token or token expired, try to login again" });
    } else {
      // check if user exists or not
      const checkUser = await User.findById(decoded.userId);
      if (
        (!checkUser && checkUser.role === "admin") ||
        checkUser.role === "customer"
      ) {
        return res.status(401).json({
          error:
            "User belonging to this token no longer exists/ permission denied",
        });
      }

      //GRANT ACCESS TO PROTECTED ROUTE
      req.user = checkUser;

      next();
    }
  }
};

module.exports = verifyToken;
