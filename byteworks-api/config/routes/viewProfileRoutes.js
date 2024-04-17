import express from "express";
import { viewProfileController } from "../../src/controllers/profileController.js"

const router = express.Router();

router.get("/profile", viewProfileController);

export default router;
