const categoryService = require("../../services/category/categoryService");

// get categories
module.exports.getCategories = async (req, res) => {
  try {
    const serviceResponse = await categoryService.getCategories();
    res.json({
      data: serviceResponse.data,
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// create a new category
module.exports.createCategories = async (req, res) => {
  try {
    const serviceResponse = await categoryService.createCategories(req.body);
    res.json({
      data: serviceResponse.data,
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// update a category
module.exports.updateCategory = async (req, res) => {
  try {
    const serviceResponse = await categoryService.updateCategory(req.body);
    res.json({
      data: serviceResponse.data,
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// delete a category
module.exports.deleteCategory = async (req, res) => {
  try {
    const serviceResponse = await categoryService.deleteCategory(req.body);
    res.json({
      message: serviceResponse.message,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
