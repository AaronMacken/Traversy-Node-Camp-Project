// @desc Logs request to console
// middleware
const logger = (req, res, next) => {
  // make a variable on the request object
  // req.hello is now available within our routes
  // req.hello = "hello world";
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  // next tells the application to move onto the next part of the function
  // since this is middleware, this is essentially saying once this has been completd,
  // then move on
  next();
};
module.exports = logger;
