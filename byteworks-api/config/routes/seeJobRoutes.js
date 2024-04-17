import express from "express"
import { lookJobsController } from "../../src/controllers/seeJobsController.js"

const router = express.Router()

router.get("/enterprise", lookJobsController)

export default router
