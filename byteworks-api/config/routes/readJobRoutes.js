import express from "express"
import { readFilteredJobs } from "../../src/controllers/lookController.js"

const router = express.Router()

router.get("/users", readFilteredJobs)

export default router
