import express from "express"
import FoodController from "../controllers/food"

const foodRouter = express.Router()

foodRouter.get("/", FoodController.getAllFood)

export default foodRouter
