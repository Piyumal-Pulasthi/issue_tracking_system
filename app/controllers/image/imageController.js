const imageService = require("../../services/image/imageService");

// get image by issue id
module.exports.getImageByIssueId = async (req, res) => {
  try {
    const serviceResponse = await imageService.getImageByIssueId(req.body);
    res.json({
      data: serviceResponse.data,
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get image by comment id
module.exports.getImageByCommentId = async (req, res) => {
  try {
    const serviceResponse = await imageService.getImageByCommentId(req.body);
    res.json({
      data: serviceResponse.data,
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// upload an image
module.exports.uploadImage = async (req, res) => {
  try {
    const serviceResponse = await imageService.uploadImage(req.body);
    res.json({
      data: serviceResponse.data,
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// update an image
module.exports.updateUploadImage = async (req, res) => {
  try {
    const serviceResponse = await imageService.updateUploadImage(req.body);
    res.json({
      data: serviceResponse.data,
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// delete an image
module.exports.deleteImage = async (req, res) => {
  try {
    const serviceResponse = await imageService.deleteImage(req.body);
    res.json({
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// delete multiple images by issue id or comment id
module.exports.deleteImages = async (req, res) => {
  try {
    const serviceResponse = await imageService.deleteImages(req.body);
    res.json({
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
