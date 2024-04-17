import pool from "../../config/database/connectionDB.js";

const lookJobs = async () => {
    try {
        const lookJobsQuery = `SELECT * FROM jobs`;
        const result = await pool.query(lookJobsQuery);
        const jobs = result.rows;
        return { success: true, jobs };
    } catch (error) {
        console.error('Error querying jobs:', error);
        const errorMessage = error.message || "An error occurred while fetching jobs.";
        return { success: false, error: errorMessage };
    }
};

export { lookJobs };


