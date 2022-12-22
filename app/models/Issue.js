const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IssueSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  uuid: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  subcategory_id: {
    type: Schema.Types.ObjectId,
    ref: "SubCategory",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Issue", IssueSchema);
