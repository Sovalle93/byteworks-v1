import { readJob } from "../models/readJobsModel.js";

const readFilteredJobs = async (req, res) => {
    try {
        const { role, skill, service } = req.query;

        const filters = { role, skill, service};
        console.log("Received filters:", filters);

        const jobs = await readJob(filters);

        if (jobs.length > 0) {
        console.log("Jobs read successfully with filters!");
        res.status(200).json({ message: "Jobs read successfully!", jobs });
        } else {
        console.error("No Jobs found based on filters.");
        res.status(404).json({ message: "No Jobs found matching the filters." });
        }
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({ message: error.message });
    }
};

export { readFilteredJobs };
