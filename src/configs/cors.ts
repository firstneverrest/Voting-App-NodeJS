import { CorsOptions } from "cors"

// SET CORS OPTION
const ALLOW_ORIGINS =
  process.env.IS_DEV_API === "true"
    ? ["http://localhost:3000", process.env.FRONTEND_ENDPOINT]
    : [process.env.FRONTEND_ENDPOINT]

const CORS_OPTION: CorsOptions = {
  origin: (origin, callback) => {
    // allow requests with no origin like mobile, curl requests
    if (!origin) return callback(null, true)
    if (ALLOW_ORIGINS.indexOf(origin) === -1) {
      const msg = "The CORS policy for this site does not allow access from the specified Origin."
      return callback(new Error(msg), false)
    }
    return callback(null, true)
  },
  credentials: true,
}

export default CORS_OPTION
