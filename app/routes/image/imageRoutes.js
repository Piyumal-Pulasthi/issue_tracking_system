const express = require("express");
const router = express.Router();
const imageController = require("../../controllers/image/imageController");
const validationsMiddleware = require("../../validators/commonValidator");
const imageValidationSchema = require("../../validators/validationSchemas/imageValidationSchema");

// get image by issue id
router.get("/get_image_by_issue", imageController.getImageByIssueId);

// get image by comment id
router.get("/get_image_by_comment", imageController.getImageByCommentId);

// upload an image
router.post(
  "/upload_image",
  validationsMiddleware(imageValidationSchema.uploadImage, "body"),
  imageController.uploadImage
);

// update an image
router.put(
  "/update_image",
  validationsMiddleware(imageValidationSchema.updateImage, "body"),
  imageController.updateUploadImage
);

// delete image
router.delete("/delete_image", imageController.deleteImage);

// delete images
router.delete("/delete_images", imageController.deleteImages);

module.exports = router;
