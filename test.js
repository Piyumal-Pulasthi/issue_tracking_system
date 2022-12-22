const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("./app");
chai.should();

chai.use(chaiHttp);

describe("Issue tracking system", () => {
  describe("/GET categories", () => {
    it("it should GET all the categories", (done) => {
      chai
        .request(app)
        .get("/api/category/get_categories")
        .end((err, res) => {
          console.log("res.body.data", res.body.data);
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          done();
        });
    });
  });
  describe("/POST category", () => {
    it("it should create a new category", (done) => {
      let category = {
        name: "This is the first frontend issue",
        description: "This is a new frontend issue",
      };
      chai
        .request(app)
        .post("/api/category/create_category")
        .send(category)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  describe("/PUT category", () => {
    it("it should update category", (done) => {
      let category = {
        categoryId: "63a29fe8013c066c52ab4b6e",
        name: "This is the first frontend issue new",
        description: "This is a new frontend issue new",
      };
      chai
        .request(app)
        .post("/api/category/update_category")
        .send(category)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  // subcategory
  describe("/GET subcategory", () => {
    it("it should GET all the subcategory", (done) => {
      chai
        .request(app)
        .get("/api/subcategory/get_subcategories")
        .end((err, res) => {
          console.log("res.body.data", res.body.data);
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          done();
        });
    });
  });
  describe("/POST subcategory", () => {
    it("it should create a new subcategory", (done) => {
      let subcategory = {
        categoryId: "63a29fe8013c066c52ab4b6e",
        name: "This is the first frontend issue",
        description: "This is a new frontend issue",
      };
      chai
        .request(app)
        .post("/api/subcategory/create_subcategory")
        .send(subcategory)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  describe("/PUT subcategory", () => {
    it("it should update subcategory", (done) => {
      let subcategory = {
        subcategoryId: "63a3dc43fc8e982dbface6a7",
        categoryId: "63a29fe8013c066c52ab4b6e",
        name: "This is the first frontend issue new",
        description: "This is a new frontend issue new",
      };
      chai
        .request(app)
        .post("/api/subcategory/update_subcategory")
        .send(subcategory)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  // issue
  describe("/GET issue", () => {
    it("it should GET all the issue", (done) => {
      chai
        .request(app)
        .get("/api/issue/get_issues")
        .end((err, res) => {
          console.log("res.body.data", res.body.data);
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          done();
        });
    });
  });
  describe("/POST issue", () => {
    it("it should create a new issue", (done) => {
      let issue = {
        categoryId: "63a29fe8013c066c52ab4b6e",
        name: "This is the first frontend issue",
        description: "This is a new frontend issue",
      };
      chai
        .request(app)
        .post("/api/issue/create_issue")
        .send(issue)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  describe("/PUT issue", () => {
    it("it should update issue", (done) => {
      let issue = {
        subcategoryId: "63a3dc43fc8e982dbface6a7",
        categoryId: "63a29fe8013c066c52ab4b6e",
        title: "This is the first frontend issue new",
        uuid: "63a29fe8013c066c52ab4b6e",
        slug: "This is a new frontend issue new",
      };
      chai
        .request(app)
        .post("/api/issue/update_issue")
        .send(issue)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  // comment
  describe("/GET comment", () => {
    it("it should GET all the comment", (done) => {
      chai
        .request(app)
        .get("/api/comment/get_comments_by_issue")
        .send({ issueId: "63a3df775e6b363557f75177" })
        .end((err, res) => {
          console.log("res.body.data", res.body.data);
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          done();
        });
    });
  });
  describe("/POST comment", () => {
    it("it should create a new comment", (done) => {
      let comment = {
        issueId: "63a3df775e6b363557f75177",
        body: "This is the first frontend comment new",
      };
      chai
        .request(app)
        .post("/api/comment/create_comment")
        .send(comment)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  describe("/PUT comment", () => {
    it("it should update issue", (done) => {
      let comment = {
        commentId: "63a29fe8013c066c52ab4b6e",
        issueId: "63a3df775e6b363557f75177",
        body: "This is the first frontend issue new",
      };
      chai
        .request(app)
        .post("/api/comment/update_comment")
        .send(comment)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  // image
  describe("/GET image", () => {
    it("it should GET all the image", (done) => {
      chai
        .request(app)
        .get("/api/image/get_image_by_issue")
        .send({ issueId: "63a3df775e6b363557f75177" })
        .end((err, res) => {
          console.log("res.body.data", res.body.data);
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          done();
        });
    });
  });
  describe("/POST image", () => {
    it("it should create a new image", (done) => {
      let image = {
        issueId: "63a3df775e6b363557f75177",
        commentId: "63a29fe8013c066c52ab4b6e",
        magable_type: "JPG",
        imagable_id: "63a29fe8013c066c52ab4b6e",
        path: "/image/folder",
        name: "imagejpg",
        extension: ".jpg",
      };
      chai
        .request(app)
        .post("/api/image/upload_image")
        .send(image)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  describe("/PUT image", () => {
    it("it should update image", (done) => {
      let image = {
        imageId: "63a3df775e6b363557f75177",
        issueId: "63a3df775e6b363557f75177",
        commentId: "63a29fe8013c066c52ab4b6e",
        magable_type: "JPG",
        imagable_id: "63a29fe8013c066c52ab4b6e",
        path: "/image/folder",
        name: "imagejpg",
        extension: ".jpg",
      };
      chai
        .request(app)
        .post("/api/image/update_image")
        .send(image)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
});
