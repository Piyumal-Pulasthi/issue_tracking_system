const CommentModel = require("../../models/Comment");
const IssueModel = require("../../models/Issue");
const ImageService = require("../../services/image/imageService");

// Get comments by issue id
module.exports.getCommentsByIssue = async (requestBody) => {
  try {
    let commentList = await CommentModel.find({
      issue_id: requestBody.issueId,
    });
    if (commentList.length == 0) {
      throw new Error("No comments found");
    }
    return {
      message: "Comment list generated",
      data: commentList,
    };
  } catch (error) {
    throw error;
  }
};

// Create comment
module.exports.createComment = async (requestBody) => {
  try {
    // check whether issue is a valid issue with issueId
    let issue = await IssueModel.findById(requestBody.issueId);
    if (!issue) {
      throw new Error("Issue is invalid");
    }
    let commentData = {
      issue_id: requestBody.issueId,
      body: requestBody.body,
    };
    let newComment = await CommentModel.create(commentData);

    return {
      message: "Comment created succesfully",
      data: newComment,
    };
  } catch (error) {
    throw error;
  }
};

// Update comment
module.exports.updateComment = async (requestBody) => {
  try {
    let issue = await IssueModel.findById(requestBody.issueId);
    if (!issue) {
      throw new Error("Issue is invalid");
    }
    // check whether comment is valid with commentId
    let currentComment = await CommentModel.findById(requestBody.commentId);
    if (!currentComment) {
      throw new Error("Comment is invalid");
    }
    let commentData = {
      issue_id: requestBody.issueId,
      body: requestBody.body,
    };
    let updatedComment = await CommentModel.findByIdAndUpdate(
      requestBody.commentId,
      commentData
    );

    return {
      message: "Comment updated succesfully",
      data: updatedComment,
    };
  } catch (error) {
    throw error;
  }
};

// Delete comment
module.exports.deleteComment = async (requestBody) => {
  try {
    await CommentModel.findByIdAndDelete(requestBody.commentId);
    // delete images regarding to the comment
    await ImageService.deleteImages(requestBody);
    return {
      message: "Comment deleted succesfully",
    };
  } catch (error) {
    throw error;
  }
};

// Delete comment by issue id
module.exports.deleteCommentByIssue = async (requestBody) => {
  try {
    await CommentModel.deleteMany({ issue_id: requestBody.issueId });
    // delete images regarding to the comment
    await ImageService.deleteImages(requestBody);
    return {
      message: "Comments deleted succesfully",
    };
  } catch (error) {
    throw error;
  }
};
