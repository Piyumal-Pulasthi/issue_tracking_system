const express = require("express");
const router = express.Router();
const categoryController = require("../../controllers/category/categoryController");
const validationsMiddleware = require("../../validators/commonValidator");
const categoryValidationSchema = require("../../validators/validationSchemas/categoryValidationSchema");

// Get categories
router.get("/get_categories", categoryController.getCategories);

// create a new category
router.post(
  "/create_category",
  validationsMiddleware(categoryValidationSchema.createCategory, "body"),
  categoryController.createCategories
);

// update a category
router.put(
  "/update_category",
  validationsMiddleware(categoryValidationSchema.updateCategory, "body"),
  categoryController.updateCategory
);

// delete a category
router.delete("/delete_category", categoryController.deleteCategory);

module.exports = router;
