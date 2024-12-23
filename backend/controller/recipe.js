const Recipes = require("../models/recipe")


const getResipes = async (req, res) => {
    const recipes = await Recipes.find()
    return res.json(recipes)
}

const getResipe = async (req, res) => {
    const recipe = await Recipes.findById(req.params.id)
    res.json(recipe)
}

const addResipe = async (req, res) => {
    const { title, ingredients, instructions, time } = req.body

    if (!title || !ingredients || !instructions) {
        res.json({ message: "Required fields can't be empty" })
    }

    const newRecipe = await Recipes.create({
        title, ingredients, instructions, time
    })
    return res.json(newRecipe)
}

const editResipe = async (req, res) => {
    const { title, ingredients, instructions, time } = req.body
    let recipe = await Recipes.findById(req.params.id)
    try {
        if(recipe){
            await Recipes.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.json({title, ingredients, instructions, time})
        }
    } catch (error) {
        return res.status(404).json({message:"error"})
    }
}

const deleteResipe = (req, res) => {
    res.json({ message: "hello vinayak" })
}

module.exports = { getResipes, getResipe, addResipe, editResipe, deleteResipe }