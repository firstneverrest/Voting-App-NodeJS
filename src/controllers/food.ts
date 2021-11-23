import { Request, Response, NextFunction } from "express"

//  const login = async () => {}
async function getAllFood(req: Request, res: Response, next: NextFunction) {
  const food = ["Papaya salad", "Pad Thai", "Tom Yum Kung"]

  if (food.length > 0) {
    return res.status(200).json({
      food: food,
    })
  } else {
    return res.status(404).json({
      msg: "Not Found Any Food",
    })
  }
}

const FoodController = {
  getAllFood,
}

export default FoodController
