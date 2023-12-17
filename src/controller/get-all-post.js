const Post = require("../model/post.model");

module.exports = async (req, res) => {
try{
  const{
    query:{per_page =4, page=1}
  } = req;
  const skip =per_page*(page-1)
  const limit = per_page*1
const numberOfItems =await Post.find({}).countDocuments()
  const body = req.body
  const posts = await Post.find({}).limit(limit).skip(skip)
  const meta ={
    currentPage:page,
    numberOfPage: numberOfItems/per_page,
    limit
  }

    if (!posts) {
      console.log("error");
      return;
    }
    return res.status(200).json({ statusText: "Sucessfully fetched all posts...", data: posts,meta });
      await posts.save()
  } 

  
  catch (error){
    return res.status(500).json({message:"error.message"})
  }

};




