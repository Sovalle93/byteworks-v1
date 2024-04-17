import express from "express"
import { readFilteredUsers } from "../../src/controllers/readController.js"

const router = express.Router()

router.get("/searchapp", readFilteredUsers)

export default router