const FoodRecipe = require("../models/recipeSchema")

const getrecipe=async(req , res)=>{
    try {
       const foodrecipe = await FoodRecipe.find({})
       res.json(foodrecipe)
    } catch (error) {
        console.log(error.message)
    }
}
const getsinglerecipe=async(req , res)=>{
    try {
         const id = req.params.id;
         const recipeData =  await FoodRecipe.findById({_id:id})
         res.json(recipeData)
    } catch (error) {
        console.log(error)
    }
}
const addrecipe=async(req , res)=>{
    try {
        const {title,ingrediants,instructions , time} =  req.body
    if(!title || !ingrediants || !instructions ) 
    {
       return res.status(400).json({message : "Required feild can't be empty"})
    }
    const newRecipe = await FoodRecipe.create({
        title,ingrediants,instructions , time
    })
    return res.status(201).json(newRecipe)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
    

}
const editrecipe=async(req , res)=>{
    try {
        const id =  req.params.id;
        const foodData =  await FoodRecipe.findByIdAndUpdate({_id:id} , req.body,{new:true})
        res.json(foodData)
    } catch (error) {
        console.log(error)
    }
}
const deleterecipe=async(req , res)=>{
  try {
         const id =  req.params.id;
        const foodData =  await FoodRecipe.findByIdAndDelete({_id:id} )
        res.json(foodData)
  } catch (error) {
     console.log(error)
  }
}


module.exports = {getrecipe, getsinglerecipe,addrecipe,editrecipe,deleterecipe};
