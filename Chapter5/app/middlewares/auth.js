const authService = require("./../services/auth");

exports.authorize = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    const user = await authService.authorize(bearerToken);
    req.user = user;
    next();
  } catch (error) {
    return res.status(error.statusCode).json({
      status: "Fail",
      message: error.message,
    });
  }
};
