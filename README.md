# Voting Application with NodeJS

## Installation

1. set up package.json

```
npm init -y
```

2. install packages

```
npm i express body-parser cors dotenv
npm i -D nodemon prettier ts-node typescript
```

3. install types for TypeScript in Node.js

```
npm i @types/express
```

4. set script with nodemon for running TypeScript

```json
// nodemon.json
{
  "watch": ["src/", "views/"],
  "ext": "js,json,ts,hbs,yaml",
  "ignore": [".git", "node_modules/**/node_modules"],
  "execMap": {
    "ts": "node --require ts-node/register"
  },
  "env": {
    "NODE_ENV": "development"
  }
}
```

```json
// package.json
  "scripts": {
    "dev": "nodemon ./src/index.ts"
  },
```

5. Write code

```ts
// index.ts
import express, { Application, Request, Response } from "express"

const PORT = process.env.PORT || 8080

const app: Application = express()

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!")
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
```
