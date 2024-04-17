import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Card, CardActionArea, CardContent, CardActions, Typography } from "@mui/material";
import { deleteJobsService } from "../../../services/DeleteJobService";
import { seeJobsService } from "../../../services/SeeJobService";
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';

const HandleJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await seeJobsService();
                if (response.success) {
                    setJobs(response.jobs);
                } else {
                    console.error('Failed to fetch jobs:', response.error);
                }
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (jobId) => {
        try {
            await deleteJobsService(jobId);
            const updatedJobs = jobs.filter(job => job.id !== jobId);
            setJobs(updatedJobs);
        } catch (error) {
            console.error('Error deleting job:', error);
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
            {jobs && jobs.map((job) => (
                <Box key={job.id} sx={{ marginBottom: 1 }}>
                    <Card variant="outlined" sx={{ maxWidth: 300 }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" color="text.primary">{job.business}</Typography>
                            <Divider />
                            <Typography variant="body2" color="text.secondary" gutterBottom sx={{ textAlign: 'center' }}>
                                {job.role}<br />
                                <Divider />
                                {job.skill}<br />
                                <Divider />
                                {job.service}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(job.id)}
                        sx={{ marginTop: 1 }}
                    >
                        Delete
                    </Button>
                </Box>
            ))}
        </Box>
    );
};

export default HandleJobs;


