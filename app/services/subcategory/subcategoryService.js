const SubCategoryModel = require("../../models/SubCategory");
const CategoryModel = require("../../models/Category");

// Get subcategories
module.exports.getSubCategories = async () => {
  try {
    let subcategoryList = await SubCategoryModel.find();
    if (subcategoryList.length == 0) {
      throw new Error("No Subcategory found");
    }
    return {
      message: "Subcategory list generated",
      data: subcategoryList,
    };
  } catch (error) {
    throw error;
  }
};

// Create subcategory
module.exports.createSubcategories = async (requestBody) => {
  try {
    let category = await CategoryModel.findById(requestBody.categoryId);
    if (!category) {
      throw new Error("Category is invalid");
    }
    let subcategoryData = {
      category_id: requestBody.categoryId,
      name: requestBody.name,
      description: requestBody.description,
    };
    let newSubcategory = await SubCategoryModel.create(subcategoryData);

    return {
      message: "Subcategory created succesfully",
      data: newSubcategory,
    };
  } catch (error) {
    throw error;
  }
};

// Update subcategory
module.exports.updateSubcategories = async (requestBody) => {
  try {
    let category = await CategoryModel.findById(requestBody.categoryId);
    if (!category) {
      throw new Error("Category is invalid");
    }

    // check whether subcategory is valid with subcategoryId
    let currentSubcategory = await SubCategoryModel.findById(
      requestBody.subcategoryId
    );
    if (!currentSubcategory) {
      throw new Error("Subategory is invalid");
    }
    let subcategoryData = {
      category_id: requestBody.categoryId,
      name: requestBody.name,
      description: requestBody.description,
    };
    let updatedSubcategory = await SubCategoryModel.findByIdAndUpdate(
      requestBody.subcategoryId,
      subcategoryData
    );

    return {
      message: "Subcategory updated succesfully",
      data: updatedSubcategory,
    };
  } catch (error) {
    throw error;
  }
};

// Delete subcategory
module.exports.deleteSubcategory = async (requestBody) => {
  try {
    await SubCategoryModel.findByIdAndDelete(requestBody.subcategoryId);
    return {
      message: "Subcategory deleted succesfully",
    };
  } catch (error) {
    throw error;
  }
};

// Delete subcategory by category id
module.exports.deleteSubcategoryByCategory = async (requestBody) => {
  try {
    await SubCategoryModel.deleteMany({ category_id: requestBody.categoryId });
    return {
      message: "Subcategory deleted succesfully",
    };
  } catch (error) {
    throw error;
  }
};
