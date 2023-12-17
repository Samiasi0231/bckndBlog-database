const Post =require("../model/post.model")

module.exports= async(req, res) => {
    try {
      const body= req.body;
      const itemId = await Post.findById(req.params.id)
console.log(itemId)

      if(!itemId) {
        return res.status(404).json({msg: "This id does not exist."})
      }
     return res.status(200).json({ statusText: "Sucessfully fetched id...", data:itemId});   
    }
     catch (error) {
        return res.status(500).json(error);
    }
  }
