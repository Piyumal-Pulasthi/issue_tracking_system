const express = require("express");
const router = express.Router();
const subcategoryController = require("../../controllers/subcategory/subcategoryController");
const validationsMiddleware = require("../../validators/commonValidator");
const subcategoryValidationSchema = require("../../validators/validationSchemas/subcategoryValidationSchema");

// get subcategories
router.get("/get_subcategories", subcategoryController.getSubCategories);

// create a subcategory
router.post(
  "/create_subcategory",
  validationsMiddleware(
    subcategoryValidationSchema.createSubcategories,
    "body"
  ),
  subcategoryController.createSubcategories
);

// update a subcategory
router.put(
  "/update_subcategory",
  validationsMiddleware(
    subcategoryValidationSchema.updateSubcategories,
    "body"
  ),
  subcategoryController.updateSubcategories
);

// delete subcategory
router.delete("/delete_subcategory", subcategoryController.deleteSubcategory);

// delete subcategory by category id
router.delete(
  "/delete_subcategory_by_category",
  subcategoryController.deleteSubcategoryByCategory
);

module.exports = router;
