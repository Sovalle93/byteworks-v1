import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, CardActions, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { seeJobsService } from "../../services/SeeJobService";

const Apply = () => {
    const [jobs, setJobs] = useState([]);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleApply = () => {
        console.log("Aplicado");
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        navigate(-1);
    };

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

    const actionLabel = "Aplicar";

    return (
        <>
            {jobs.length > 0 && (
                <Card sx={{
                    width: 500,
                    height: 400,
                    margin: "auto",
                    p: 3,
                }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Empresa: {jobs[0].business}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Role: {jobs[0].role}
                        </Typography>
                        <Typography variant="body2">
                            Status: {jobs[0].service}
                            <br />
                            Skills: {jobs[0].skill}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            variant="text"
                            sx={{
                                color: "#1976D2",
                                "&:focus": {
                                    outline: "none",
                                },
                                "&:active": {
                                    outline: "none",
                                },
                            }}
                            onClick={handleApply}
                        >
                            {actionLabel}
                        </Button>
                    </CardActions>
                </Card>
            )}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirmed!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Appliance was succesful!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Apply;




