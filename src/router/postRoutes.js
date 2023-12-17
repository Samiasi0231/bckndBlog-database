const createPost = require("../controller/create-Post");
const getAllPosts = require("../controller/get-all-post");
const getMember = require("../controller/get-one-post");
const delet= require("../controller/delet-post");
const putPost = require("../controller/put-post");

const postsRouter = require("express").Router();

postsRouter.get("/all", getAllPosts);
postsRouter.post("/post",createPost);
postsRouter.get("/:id", getMember);
postsRouter.put("/:id",putPost);

postsRouter.delete("/:id", delet);

module.exports = postsRouter;
