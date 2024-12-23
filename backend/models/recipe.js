const mongoose=require("mongoose")

const recipeSchema=mongoose.Schema(
    {
        title:String,
        required:true
    },
    {
        ingredients:String,
        required:true
    },
    {
        instuction:String,
        required:true
    },
    {
        time:String
    },
    {
        coverImage:String
    },
    {Timestamp:true}
)

module.exports=mongoose.model("Recipes",recipeSchema)