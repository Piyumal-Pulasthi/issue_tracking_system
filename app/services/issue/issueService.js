const SubCategoryModel = require("../../models/SubCategory");
const CategoryModel = require("../../models/Category");
const IssueModel = require("../../models/Issue");
const CommentService = require("../../services/comment/commentService");

// Get issue by id
module.exports.getIssueById = async (requestBody) => {
  try {
    let issue = await IssueModel.findById(requestBody.issueId);
    if (!issue) {
      throw new Error("No issue found");
    }
    return {
      message: "Issue list generated",
      data: issue,
    };
  } catch (error) {
    throw error;
  }
};

// Get issues
module.exports.getIssues = async () => {
  try {
    let issueList = await IssueModel.find();
    if (issueList.length == 0) {
      throw new Error("No issue found");
    }
    return {
      message: "Issue list generated",
      data: issueList,
    };
  } catch (error) {
    throw error;
  }
};

// Create issue
module.exports.createIssue = async (requestBody) => {
  try {
    let category = await CategoryModel.findById(requestBody.categoryId);
    if (!category) {
      throw new Error("Category is invalid");
    }
    let subcategory = await SubCategoryModel.findById(
      requestBody.subcategoryId
    );

    // check whether subcatory is regarding to category
    let validSubcategory = await SubCategoryModel.findOne({
      category_id: requestBody.categoryId,
    });

    if (!subcategory || !validSubcategory) {
      throw new Error("Subcategory is invalid");
    }

    let issueData = {
      title: requestBody.title,
      body: requestBody.body,
      uuid: requestBody.uuid,
      slug: requestBody.slug,
      category_id: requestBody.categoryId,
      subcategory_id: requestBody.subcategoryId,
    };
    let newIssue = await IssueModel.create(issueData);

    return {
      message: "Issue created succesfully",
      data: newIssue,
    };
  } catch (error) {
    throw error;
  }
};

// Update issue
module.exports.updateIssue = async (requestBody) => {
  try {
    let category = await CategoryModel.findById(requestBody.categoryId);
    if (!category) {
      throw new Error("Category is invalid");
    }
    let subcategory = await SubCategoryModel.findById(
      requestBody.subcategoryId
    );

    // check whether subcatory is regarding to category
    let validSubcategory = await SubCategoryModel.findOne({
      category_id: requestBody.categoryId,
    });

    if (!subcategory || !validSubcategory) {
      throw new Error("Subcategory is invalid");
    }
    let currentIssue = await IssueModel.findById(requestBody.issueId);

    if (!currentIssue) {
      throw new Error("Issue is invalid");
    }

    let issueData = {
      title: requestBody.title,
      body: requestBody.body,
      uuid: requestBody.uuid,
      slug: requestBody.slug,
      category_id: requestBody.categoryId,
      subcategory_id: requestBody.subcategoryId,
    };
    let editIssue = await IssueModel.findByIdAndUpdate(
      requestBody.issueId,
      issueData
    );

    return {
      message: "Issue created succesfully",
      data: editIssue,
    };
  } catch (error) {
    throw error;
  }
};

// Delete issue
module.exports.deleteIssue = async (requestBody) => {
  try {
    await IssueModel.findByIdAndDelete(requestBody.issueId);
    await CommentService.deleteCommentByIssue(requestBody);
    return {
      message: "Issue deleted succesfully",
    };
  } catch (error) {
    throw error;
  }
};
