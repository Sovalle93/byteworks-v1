import express from "express";
import { deleteJobsController } from "../../src/controllers/deleteJobsController.js";

const router = express.Router();

router.delete("/enterprise/:jobId", deleteJobsController);

export default router;
