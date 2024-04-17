import pool from "../../config/database/connectionDB.js";

const deleteJobs = async (jobId) => {
    try {
        if (!jobId) {
            throw new Error('Job ID parameter is required');
        }

        const query = `
            DELETE FROM jobs
            WHERE id = $1
        `;

        await pool.query(query, [jobId]);

        return { success: true };
    } catch (error) {
        console.error("Error in deleteJobs model:", error);
        throw error;
    }
};

export { deleteJobs };
