const express = require("express")
const app = express()
const dotenv = require('dotenv').config();
const cors = require("cors");
const userRoutes = require("./routes/userrouter");
app.use("/images", express.static("public/images"));

app.use(cors());

const connectDB = require("./db/connection")
const PORT = process.env.PORT || 3000
const recipeRoutes = require("./routes/recipe")
connectDB()
app.use(express.json()); // VERY IMPORTANT
app.use("/api/recipes", recipeRoutes);
app.use("/api/user", userRoutes);


app.listen(PORT , ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})