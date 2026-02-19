const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    ingrediants: {
      type: [String],
      required: true
    },
    instructions: {
      type: String,
      required: true
    },
    time: {
      type: String
    },
   image: {
  type: String
},
createdBy: {
  type : mongoose.Schema.Types.ObjectId,
  ref : "User"
}

  },
  { timestamps: true }
);

const FoodRecipe = mongoose.model("FoodRecipe", recipeSchema);
module.exports = FoodRecipe;
