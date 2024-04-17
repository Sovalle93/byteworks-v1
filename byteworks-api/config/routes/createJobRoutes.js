import express from "express";
import { createNewJob } from "../../src/controllers/jobsController.js";

const router = express.Router();

router.post("/createjobs", createNewJob);

export default router;
