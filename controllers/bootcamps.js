// these are the functions that our bootcamps api routes will use

// @desc Get all bootcmaps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ didGoof: false, msg: "Return bootcamps" });
};

// @desc Get single bootcamp
// @route GET /api/v1/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    didGoof: false,
    msg: `Display bootcamp: ${req.params.id}`,
  });
};

// @desc Create new bootcamp
// @route POST /api/v1/
// @access Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ didGoof: false, msg: "Create a bootcamp" });
};

// @desc Update bootcamp
// @route PUT /api/v1/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ didGoof: false, msg: `Update bootcamp ${req.params.id}` });
};

// @desc Delete bootcamp
// @route DELETE /api/v1/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ didGoof: false, msg: `Delete bootcamp ${req.params.id}` });
};
