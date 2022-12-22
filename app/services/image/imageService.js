const CommentModel = require("../../models/Comment");
const IssueModel = require("../../models/Issue");
const ImageModel = require("../../models/Image");

// Get images by issue id
module.exports.getImageByIssueId = async (requestBody) => {
  try {
    let imageList = await ImageModel.find({
      issue_id: requestBody.issueId,
    });
    if (imageList.length == 0) {
      throw new Error("No images found");
    }
    return {
      message: "Image list generated",
      data: imageList,
    };
  } catch (error) {
    throw error;
  }
};

// Get images by comment id
module.exports.getImageByCommentId = async (requestBody) => {
  try {
    let imageList = await ImageModel.find({
      comment_id: requestBody.commentId,
    });
    if (imageList.length == 0) {
      throw new Error("No images found");
    }
    return {
      message: "Image list generated",
      data: imageList,
    };
  } catch (error) {
    throw error;
  }
};

// Upload image
module.exports.uploadImage = async (requestBody) => {
  try {
    let issue = await IssueModel.findById(requestBody.issueId);
    if (!issue) {
      throw new Error("Issue is invalid");
    }
    let comment = await CommentModel.findById(requestBody.commentId);

    // check comment is regarding to the issue id
    let validComment = await CommentModel.findOne({
      issue_id: requestBody.issueId,
    });

    if (!comment || !validComment) {
      throw new Error("Comment is invalid");
    }

    // create image data object
    let imageData = {
      imagable_type: requestBody.imagableType,
      imagable_id: requestBody.imagableId,
      size: requestBody.size,
      path: requestBody.path,
      name: requestBody.name,
      extension: extension,
      issue_id: requestBody.issueId,
      comment_id: requestBody.commentId,
    };
    let newImage = await ImageModel.create(imageData);

    return {
      message: "Image uploaded succesfully",
      data: newImage,
    };
  } catch (error) {
    throw error;
  }
};

// Update Upload image
module.exports.updateUploadImage = async (requestBody) => {
  try {
    let issue = await IssueModel.findById(requestBody.issueId);
    if (!issue) {
      throw new Error("Issue is invalid");
    }
    let comment = await CommentModel.findById(requestBody.commentId);

    // check comment is regarding to the issue id
    let validComment = await CommentModel.findOne({
      issue_id: requestBody.issueId,
    });

    if (!comment || !validComment) {
      throw new Error("Comment is invalid");
    }

    let currentImage = await ImageModel.findById(requestBody.imageId);
    if (!currentImage) {
      throw new Error("Image is invalid");
    }

    // create image data object
    let imageData = {
      imagable_type: requestBody.imagableType,
      imagable_id: requestBody.imagableId,
      size: requestBody.size,
      path: requestBody.path,
      name: requestBody.name,
      extension: extension,
      issue_id: requestBody.issueId,
      comment_id: requestBody.commentId,
    };
    let updatedImage = await ImageModel.findByIdAndUpdate(
      requestBody.imageId,
      imageData
    );

    return {
      message: "Image updated succesfully",
      data: updatedImage,
    };
  } catch (error) {
    throw error;
  }
};

// Delete image
module.exports.deleteImage = async (requestBody) => {
  try {
    await ImageModel.findByIdAndDelete(requestBody.imageId);
    return {
      message: "Image deleted succesfully",
    };
  } catch (error) {
    throw error;
  }
};

// Delete images by comment id/issue id
module.exports.deleteImages = async (requestBody) => {
  try {
    // delete comments if requestBody got issueId
    if (requestBody.issueId) {
      await ImageModel.deleteMany({ issue_id: requestBody.issueId });
    } else {
      await ImageModel.deleteMany({ comment_id: requestBody.commentId });
    }
    return {
      message: "Images deleted succesfully",
    };
  } catch (error) {
    throw error;
  }
};
