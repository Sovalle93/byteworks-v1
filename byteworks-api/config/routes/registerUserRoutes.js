import express from "express";
import { createNewUser } from "../../src/controllers/usersController.js";

const router = express.Router();

router.post("/people", createNewUser);

export default router;
