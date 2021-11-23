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
