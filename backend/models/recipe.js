const mongoose = require("mongoose")

const recipeSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        ingredients: {
            type: Array,
            required: true
        },
        instructions: {
            type: String,
            required: true
        },
        time: {
            type: String,
        },
        coverImage: {
            type: String,
        }
    },
    { Timestamp: true },
)

module.exports = mongoose.model("Recipes", recipeSchema)