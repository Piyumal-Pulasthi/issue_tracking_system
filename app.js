const express = require("express");
const app = express();
const mongoose = require("mongoose");
const categoryRoutes = require("./app/routes/category/categoryRoutes");
const subcategoryRoutes = require("./app/routes/subcategory/subcategoryRoutes");
const commentRoutes = require("./app/routes/comment/commentRoutes");
const imageRoutes = require("./app/routes/image/imageRoutes");
const issueRoutes = require("./app/routes/issue/issueRoutes");

//middleware
app.use(express.json());

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/IssueTracker",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.use("/api/category", categoryRoutes);
app.use("/api/subcategory", subcategoryRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/image", imageRoutes);
app.use("/api/issue", issueRoutes);

module.exports = app;
