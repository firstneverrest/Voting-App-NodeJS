import express, { Application, Request, Response } from "express"

const PORT = process.env.PORT || 8080

const app: Application = express()

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!")
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
