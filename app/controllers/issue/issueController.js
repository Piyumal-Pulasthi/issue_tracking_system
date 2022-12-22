const issueService = require("../../services/issue/issueService");

// get issue by id
module.exports.getIssueById = async (req, res) => {
  try {
    const serviceResponse = await issueService.getIssueById(req.body);
    res.json({
      data: serviceResponse.data,
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get all issues
module.exports.getIssues = async (req, res) => {
  try {
    const serviceResponse = await issueService.getIssues();
    res.json({
      data: serviceResponse.data,
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// create an issue
module.exports.createIssue = async (req, res) => {
  try {
    const serviceResponse = await issueService.createIssue(req.body);
    res.json({
      data: serviceResponse.data,
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// update an issue
module.exports.updateIssue = async (req, res) => {
  try {
    const serviceResponse = await issueService.updateIssue(req.body);
    res.json({
      data: serviceResponse.data,
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// delete an issue
module.exports.deleteIssue = async (req, res) => {
  try {
    const serviceResponse = await issueService.deleteIssue(req.body);
    res.json({
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
