const userService = require("./../services/user");

exports.register = async (req, res) => {
  try {
    const body = req.body;
    const data = await userService.create(body, false);

    return res.json({
      status: "OK",
      message: "Success",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const body = req.body;

    data = await userService.checkUser(body);
    return res.json({
      status: "OK",
      message: "Login Successful",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: `Login Failed: ${error.message}`,
    });
  }
};

exports.registerAdmin = async (req, res) => {
  try {
    const body = req.body;
    const data = await userService.create(body, true);
    return res.json({
      status: "OK",
      message: "Success",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: error.message,
    });
  }
};
