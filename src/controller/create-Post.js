const constant = require("../config/constant");
const Post = require("../model/post.model");
const joi =require("joi")
const schema = joi.object({
  title:joi.string().required(),
  description:joi.string().required(),
  category:joi.string().valid(...constant.postCategories).required(),
  body:joi.string().required()
})


module.exports = async (req, res) => {
  const body = req.body;
  const {value,error}= schema.validate(body)
  if(error){
    return res.status(400).json({
      error:error.details[0].message,
      statusText:"fail"
    })
  }

  try {
   
    const post = await Post.create(body);
    await post.save()
    if (!post) {
      console.log("error");
      return;
    }
    return res.status(200).json({ statusText: "Successfully created a post",post });
  } catch (error) {
    return res.status(500).json(error);
  }
};
