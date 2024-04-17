import express from "express"
import { loginUser } from "../../src/controllers/userLoginController.js"
import { validparameters } from "../../middlewares/validateParametersLogin.js"
import { decodeTokenMiddleware} from "../../middlewares/authToken.js"

const router = express.Router()

router.post("/login", validparameters, decodeTokenMiddleware,  loginUser)

export default router
