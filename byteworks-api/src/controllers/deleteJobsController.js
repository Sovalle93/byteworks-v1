import { deleteJobs } from "../models/deleteJobsModel.js";

const deleteJobsController = async (req, res) => {
    try {
        const { jobId } = req.params;
        if (!jobId) {
            return res.status(400).json({ success: false, error: 'Job ID parameter is required' });
        }

        await deleteJobs(jobId);

        res.status(200).json({ success: true, message: 'Job deleted successfully' });
    } catch (error) {
        console.error('Error in deleteJobs controller:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

export { deleteJobsController };
