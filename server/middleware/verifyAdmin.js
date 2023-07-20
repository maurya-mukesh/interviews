// Authorization middleware
function authorizeAdmin(req, res, next) {
  if (req.user.role === "admin") {
    next();
  } else {
    return res
      .status(403)
      .json({ error: "You do not have permission to access this resource." });
  }
}

module.exports = authorizeAdmin;
