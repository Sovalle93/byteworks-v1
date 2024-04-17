import { lookJobs } from "../models/seeJobsModel.js";

const lookJobsController = async (req, res) => {
    try {
        const { success, jobs, error } = await lookJobs();

        if (success) {
            res.status(200).json({ success: true, jobs });
        } else {
            res.status(500).json({ success: false, error });
        }
    } catch (error) {
        console.error('Error in lookJobs controller:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

export { lookJobsController };


