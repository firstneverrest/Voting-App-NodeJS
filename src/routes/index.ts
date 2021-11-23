import express from "express"
import foodRouter from "./food"

const apiRouter = express.Router()

apiRouter.use("/food", foodRouter)

export default apiRouter
