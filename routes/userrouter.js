const express = require("express")
const router = express.Router()
const {userLogin , userSignUp , getUser, getAllUsers } = require("../controllers/usercontroller")

router.post("/signUp" , userSignUp)
router.post("/login", userLogin)
router.get("/users" , getAllUsers)
router.get("/:id" , getUser)

module.exports = router

// http://localhost:5000/api/user/signUp
// http://localhost:5000/api/user/login
// http://localhost:5000/api/user/users
// http://localhost:5000/api/user/698e40a7a884b2e8eefc3fe0