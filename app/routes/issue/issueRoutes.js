const express = require("express");
const router = express.Router();
const issueController = require("../../controllers/issue/issueController");
const validationsMiddleware = require("../../validators/commonValidator");
const issueValidationSchema = require("../../validators/validationSchemas/issueValidationSchema");

// get issue by id
router.get("/get_issue_by_id", issueController.getIssueById);

// get all issues
router.get("/get_issues", issueController.getIssues);

// create an issue
router.post(
  "/create_issue",
  validationsMiddleware(issueValidationSchema.createIssue, "body"),
  issueController.createIssue
);

// update an issue
router.put(
  "/update_issue",
  validationsMiddleware(issueValidationSchema.updateIssue, "body"),
  issueController.updateIssue
);

// delete issue
router.delete("/delete_issue", issueController.deleteIssue);

module.exports = router;
