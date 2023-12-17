const Post =require("../model/post.model")

module.exports =async(req,res)=>{

  const itemId=req.params.id
  const updateData =req.body

    try{
     
      const updateBlog = await Post.findByIdAndUpdate(itemId,updateData, {new:true})
      console.log(updateBlog)

      if (!updateBlog) {
        return res.status(404).json ({message:"item not found"})
      }
    return res.status(200).json({message:"updated sucessfully",data:updateBlog})
     await updateblog.save()
    
    } catch (error){
      return res.status(500).json({message:"error.message"})
    }
      }