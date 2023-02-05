const validateUserAuth = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      message: "something went wrong",
      data: {},
      err: "Email or password is missing in the signup body",
    });
  }
  next();
};

module.exports = { validateUserAuth };