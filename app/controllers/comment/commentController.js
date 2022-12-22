const commentService = require("../../services/comment/commentService");

// get comment by issue id
module.exports.getCommentsByIssue = async (req, res) => {
  try {
    const serviceResponse = await commentService.getCommentsByIssue(req.body);
    res.json({
      data: serviceResponse.data,
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// create a new comment
module.exports.createComment = async (req, res) => {
  try {
    const serviceResponse = await commentService.createComment(req.body);
    res.json({
      data: serviceResponse.data,
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// update a comment
module.exports.updateComment = async (req, res) => {
  try {
    const serviceResponse = await commentService.updateComment(req.body);
    res.json({
      data: serviceResponse.data,
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// delete a comment
module.exports.deleteComment = async (req, res) => {
  try {
    const serviceResponse = await commentService.deleteComment(req.body);
    res.json({
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// delete a comment by issue id
module.exports.deleteCommentByIssue = async (req, res) => {
  try {
    const serviceResponse = await commentService.deleteCommentByIssue(req.body);
    res.json({
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
