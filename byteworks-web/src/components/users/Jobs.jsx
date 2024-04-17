import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import JobsCard from "./JobCard";

const Jobs = ({ jobData }) => {
    if (!jobData) {
        return <Typography variant="body1">No job data found.</Typography>;
    }

    const job = jobData;

    return (
        <Box margin="auto" height={300} width={1000} display="flex" flexDirection="row" alignItems="center" gap={1} p={2} sx={{ marginTop: "5px" }}>
            <JobsCard key={job.id} job={job} />
        </Box>
    );
};

export default Jobs;


