const express = require("express");
const router = express.Router();
const commentController = require("../../controllers/comment/commentController");
const validationsMiddleware = require("../../validators/commonValidator");
const commentValidationSchema = require("../../validators/validationSchemas/commentValidationSchema");

// get comments by issue id
router.get("/get_comments_by_issue", commentController.getCommentsByIssue);

// create a new comment
router.post(
  "/create_comment",
  validationsMiddleware(commentValidationSchema.createComment, "body"),
  commentController.createComment
);

// update a comment
router.put(
  "/update_comment",
  validationsMiddleware(commentValidationSchema.updateComment, "body"),
  commentController.updateComment
);

// delete a comment
router.delete("/delete_comment", commentController.deleteComment);

// delete a comment by issue
router.delete(
  "/delete_comment_by_issue",
  commentController.deleteCommentByIssue
);

module.exports = router;
