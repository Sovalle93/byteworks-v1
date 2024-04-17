import { createJobs } from "../models/createJobsModel.js";

const createNewJob = async (req, res) => {
    try {
        console.log('Request body:', req.body); 
        const { business, role, skill, service } = req.body;
        if (!business || !role || !skill || !service) {
            throw new Error("Missing required parameters.");
        }
        const newJobObject = await createJobs(business, role, skill, service);
        if (newJobObject.success) {
            console.log("Job created successfully!");
            res.status(201).json({ message: "Job created successfully!", newJob: newJobObject.job });
        } else {
            console.error("Error creating job:", newJobObject.error);
            res.status(400).json({ message: newJobObject.error });
        }
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};

export { createNewJob };

