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
npm i -D @types/express @types/body-parser @types/cors
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

## Documentation with Swagger UI

Swagger is a tool for beautiful documenting your APIs. You can send Swagger UI to both frontend and other stakeholder to understand what API endpoints they can use.

you need to install 3 packages in order to use Swagger UI.

```
npm i swagger swagger-ui-express swagger-jsdoc swagger-stats
npm i -D @types/swagger-jsdoc @types/swagger-stats @types/swagger-ui-express
```

```ts
// index.ts
import swaggerUI from "swagger-ui-express"
import swaggerSpec from "./configs/swagger"
import swaggerStats from "swagger-stats"

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec, { explorer: true }))
app.use(
  swaggerStats.getMiddleware({
    name: "mascot-stats",
    uriPath: "/stats",
    swaggerSpec: swaggerSpec,
  })
)
```

```js
// config/swagger.ts
import swaggerJSDoc, { Options } from "swagger-jsdoc"

const swaggerOptions: Options = {
  swaggerDefinition: {
    openapi: "3.0.3",
    host: "localhost:8080",
    basePath: "/api/v1",
    info: {
      title: "Voting Application - API Documentation",
      description: "Voting Application Description",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url: "/api/v1",
      },
    ],
  },
  apis: ["**/docs/*.yaml"],
}

const swaggerSpec = swaggerJSDoc(swaggerOptions)
export default swaggerSpec
```

```yaml
paths:
  /auth/login:
    post: # POST /auth/login
      tags: [Authentication]
      summary: Login to the application
      produces: application/json
      security: []
      parameters:
        - name: studentid
          description: user's studentid
          required: true
          schema:
            type: string
        - name: password
          description: user's password
          required: true
          schema:
            type: string
      responses:
        "200": # Success
          description: Login successful
          content:
            application/json:
              schema:
                type: object
                properties:
                  token:
                    type: string
                    example: jwtToken
                    description: generate jwt token and send back to client
                  msg:
                    type: string
                    example: login successful
                    description: login successful
        "401": # Unauthorized
          description: Unauthorized user
          content:
            application/json:
              schema:
                type: object
                properties:
                  msg:
                    type: string
                    example: unauthorized user
                    description: unauthorized user
```

## Build

Use typescript package to build

```
tsc
```
