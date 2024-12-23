const express = require("express");
const { getResipes, getResipe, addResipe, editResipe, deleteResipe } = require("../controller/recipe");
const router = express.Router()

router.get("/", getResipes) //Get all recipes
router.get("/:id", getResipe) //Get recipe by id
router.post("/", addResipe) //add recipe
router.put("/:id", editResipe) //Edit recipe
router.delete("/:id", deleteResipe) //Delete recipe


module.exports = router