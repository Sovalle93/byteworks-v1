import * as React from "react";
import { useState } from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LanIcon from '@mui/icons-material/Lan';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Controller, useForm } from "react-hook-form";
import { createJobsService } from "../../../services/CreateJobsService.jsx";

function Copyright(props) {
    return (
        <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
        >
        {"Copyright © "}
        <Link color="inherit" href="https://byteworks.cl">
            ByteWorks
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
        </Typography>
    );
}

const defaultTheme = createTheme();

const createJobs = () => {
    const { handleSubmit, reset, control } = useForm();
    const [business, setBusiness] = useState("");

    const onSubmit = async (data) => {
        try {
            if (!data.business) {
                throw new Error("User data is missing or incomplete.");
            }
            await createJobsService(data);
            reset();
        } catch (error) {
            console.error("Error creating job:", error);
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{
                        mt: 5,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "#257FEA" }}>
                        <LanIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create Job
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl fullWidth required>
                                    <Controller
                                        name="business"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                autoComplete="name"
                                                label="Business"
                                                required
                                                fullWidth
                                                id="userName"
                                                autoFocus
                                            />
                                        )}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel id="role-label">Role</InputLabel>
                                    <Controller
                                        name="role"
                                        id="role"
                                        defaultValue={""}
                                        control={control}
                                        render={({ field }) => (
                                            <Select labelId="role-label"
                                                label="Role"
                                                {...field}
                                                sx={{ width: '30rem' }}>
                                                <MenuItem value="Back-End">Back-End Developer</MenuItem>
                                                <MenuItem value="Front-End">
                                                    Front-End Developer
                                                </MenuItem>
                                                <MenuItem value="Full-Stack">
                                                    Full-Stack Engineer
                                                </MenuItem>
                                                <MenuItem value="Machine Learning Engineer">
                                                    Machine Learning Engineer
                                                </MenuItem>
                                                <MenuItem value="Mobile Applications">
                                                    Mobile Applications Developer
                                                </MenuItem>
                                                <MenuItem value="QA Engineer">
                                                    QA Engineer (Selenium)
                                                </MenuItem>
                                                <MenuItem value="Cloud Engineer">
                                                    Cloud Engineer
                                                </MenuItem>
                                                <MenuItem value="Data Analyst">Data Analyst</MenuItem>
                                            </Select>
                                        )}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel id="skill-label">Skill</InputLabel>
                                    <Controller
                                        name="skill"
                                        id="skill"
                                        defaultValue={""}
                                        control={control}
                                        render={({ field }) => (
                                            <Select labelId="skill-label"
                                                label="Skill"
                                                {...field}>
                                                <MenuItem value="JavaScript">JavaScript</MenuItem>
                                                <MenuItem value="Node.js">
                                                    Node.js
                                                </MenuItem>
                                                <MenuItem value="React">
                                                    React
                                                </MenuItem>
                                                <MenuItem value="Python">
                                                    Python
                                                </MenuItem>
                                                <MenuItem value="Java">
                                                    Java
                                                </MenuItem>
                                            </Select>
                                        )}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel id="role-label">Service</InputLabel>
                                    <Controller
                                        name="service"
                                        id="service"
                                        defaultValue=""
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                labelId="role-label"
                                                label="Service"
                                                {...field}
                                            >
                                                <MenuItem value="Freelance">Freelance</MenuItem>
                                                <MenuItem value="Contractor">Contract</MenuItem>
                                            </Select>
                                        )}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: "#257FEA" }}
                        >
                            Create Job
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    )
};

export default createJobs