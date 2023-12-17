const Post = require("../model/post.model")


module.exports=async(req,res)=>{
 try{
       const itemId = req.params.id
    const deleteItemId = await Post.findByIdAndDelete(itemId)
        
       return res.status(200).json({message:"deleted successfully",deleteItemId})
        }
         catch (error){
            return res.status(500).json({message:"error.message"})
          }
    }

    