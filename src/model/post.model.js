const { Schema, model } = require("mongoose");
const constant = require("../config/constant");

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    }, 
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: constant.postCategories,
    },
    createdBy: {
      type: String,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = model("Post", PostSchema);

module.exports = Blog;
