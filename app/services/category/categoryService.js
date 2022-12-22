const CategoryModel = require("../../models/Category");
const subcategoryService = require("../../services/subcategory/subcategoryService");

// Get categories
module.exports.getCategories = async () => {
  try {
    let categoryList = await CategoryModel.find();
    if (categoryList.length == 0) {
      throw new Error("No categories found");
    }
    return {
      message: "Category list generated",
      data: categoryList,
    };
  } catch (error) {
    throw error;
  }
};

// Create category
module.exports.createCategories = async (requestBody) => {
  try {
    // create category data object
    let categoryData = {
      name: requestBody.name,
      description: requestBody.description,
    };
    let newCategory = await CategoryModel.create(categoryData);

    return {
      message: "Category created succesfully",
      data: newCategory,
    };
  } catch (error) {
    throw error;
  }
};

// Update category
module.exports.updateCategory = async (requestBody) => {
  try {
    let currentCategory = await CategoryModel.findById(requestBody.categoryId);
    if (!currentCategory) {
      throw new Error("Category is invalid");
    }
    let categoryData = {
      name: requestBody.name,
      description: requestBody.description,
    };
    await CategoryModel.findByIdAndUpdate(requestBody.categoryId, categoryData);

    return {
      message: "Category updated succesfully",
    };
  } catch (error) {
    throw error;
  }
};

// Delete category
module.exports.deleteCategory = async (requestBody) => {
  try {
    await CategoryModel.findByIdAndDelete(requestBody.categoryId);
    // delete subcategories regarding to the category
    await subcategoryService.deleteSubcategoryByCategory(requestBody);
    return {
      message: "Category deleted succesfully",
    };
  } catch (error) {
    throw error;
  }
};
