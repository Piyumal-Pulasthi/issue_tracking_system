const subcategoryService = require("../../services/subcategory/subcategoryService");

// get subcategory
module.exports.getSubCategories = async (req, res) => {
  try {
    const serviceResponse = await subcategoryService.getSubCategories();
    res.json({
      data: serviceResponse.data,
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// create a subcategory
module.exports.createSubcategories = async (req, res) => {
  try {
    const serviceResponse = await subcategoryService.createSubcategories(
      req.body
    );
    res.json({
      data: serviceResponse.data,
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// update a subcategory
module.exports.updateSubcategories = async (req, res) => {
  try {
    const serviceResponse = await subcategoryService.updateSubcategories(
      req.body
    );
    res.json({
      data: serviceResponse.data,
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// delete a subcategory
module.exports.deleteSubcategory = async (req, res) => {
  try {
    const serviceResponse = await subcategoryService.deleteSubcategory(
      req.body
    );
    res.json({
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// delete a subcategory by category id
module.exports.deleteSubcategoryByCategory = async (req, res) => {
  try {
    const serviceResponse =
      await subcategoryService.deleteSubcategoryByCategory(req.body);
    res.json({
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
