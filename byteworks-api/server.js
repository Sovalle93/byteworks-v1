import express from "express";
import cors from "cors";
import { logger } from "logger-express";


import registerBusinessRoutes from "./config/routes/registerBusinessRoutes.js";
import registerUserRoutes from "./config/routes/registerUserRoutes.js";
import loginRoutes from "./config/routes/loginRoutes.js";
import readUserRoutes from "./config/routes/readUserRoutes.js";
import createJobRoutes from "./config/routes/createJobRoutes.js";
import readJobRoutes from "./config/routes/readJobRoutes.js";
import viewProfileRoutes from "./config/routes/viewProfileRoutes.js";
import deleteJobRoutes from "./config/routes/deleteJobRoutes.js";
import seeJobRoutes from "./config/routes/seeJobRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(logger());

app.use("/", registerUserRoutes);
app.use("/", loginRoutes);
app.use("/", registerBusinessRoutes);
app.use("/", createJobRoutes);
app.use("/", readUserRoutes);
app.use("/", readJobRoutes);
app.use("/", viewProfileRoutes);
app.use("/", deleteJobRoutes);
app.use("/", seeJobRoutes);


app.listen(PORT, console.log(`Server running on port ${PORT}`));

