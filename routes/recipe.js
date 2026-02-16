const express = require("express")
const router = express.Router()
const {getrecipe , getsinglerecipe ,addrecipe,editrecipe,deleterecipe} = require("../controllers/recipecontrollers")

router.get("/",getrecipe)
router.get("/:id",getsinglerecipe   )
router.post("/",addrecipe)
router.put("/:id",editrecipe)
router.delete("/:id",deleterecipe)

module.exports= router