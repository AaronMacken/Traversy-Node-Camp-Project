const express = require("express");

// using express router to make these routes available
// instead of app.get -> router.get
const router = express.Router();

// import our controller functions with destructuring
const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");
// This is one of the the ROUTE files for our API,
// they will make use of logic functions which that exist in the controllers folder

// All routes are prefixed with '/api/v1/bootcamps' thanks to your app.use statement in server.js
// now we can simply use router.route & write which crud function to use & assign its functionality
// to the controller methods that we imported from the controllers/bootcamps file
router.route("/").get(getBootcamps).post(createBootcamp);
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

//export router (make file available to other files)
module.exports = router;
