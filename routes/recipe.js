const express = require("express")
const router = express.Router()
const {getrecipe , getsinglerecipe ,addrecipe,editrecipe,deleterecipe , upload} = require("../controllers/recipecontrollers")
const verifyToken = require("../middleware/auth")

router.get("/",getrecipe)
router.get("/:id",getsinglerecipe   )
// router.post("/", upload.single('image') , verifyToken ,  addrecipe)
router.post("/", verifyToken, upload.single('image'), addrecipe)

router.put("/:id",editrecipe)
router.delete("/:id",deleterecipe)

module.exports= router