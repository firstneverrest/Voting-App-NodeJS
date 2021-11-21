import express, { Application, Request, Response } from "express"

// swagger
import swaggerUI from "swagger-ui-express"
import swaggerSpec from "./configs/swagger"
import swaggerStats from "swagger-stats"

const PORT = process.env.PORT || 8080

const app: Application = express()

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec, { explorer: true }))
app.use(
  swaggerStats.getMiddleware({
    name: "mascot-stats",
    uriPath: "/stats",
    swaggerSpec: swaggerSpec,
  })
)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!")
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
