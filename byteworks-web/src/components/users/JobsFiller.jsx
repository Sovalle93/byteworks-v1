import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { lightBlue } from '@mui/material/colors';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import WorkIcon from '@mui/icons-material/Work';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const JobsFiller = ({ onSubmit }) => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            role: '',
            skill: '',
            service: '',
        },
    });

    const handleFilterSubmit = (data) => {
        onSubmit(data);
    };

    return (
        <Box display="flex" flexDirection="row" p={2} gap={20}>
            <form onSubmit={handleSubmit(handleFilterSubmit)}>
                <Box
                    margin="auto"
                    height={530}
                    width={400}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap={2}
                    p={2}
                    sx={{
                        border: '2px solid gray',
                        borderRadius: '10px',
                        marginLeft: '20px',
                        marginTop: '10px',
                        bgcolor: 'white',
                    }}
                >
                        <Stack direction="row" spacing={2} sx={{
                            display:"flex",
                            flexDirection:"row",
                        }}>
                        <Typography variant="h4" sx={{ textShadow: '0 0 1px #000, 0 0 1px #000, 0 0 1px #000' }}> Job </Typography>
                            <Avatar sx={{ bgcolor: lightBlue[500] }}>
                                <WorkIcon />
                            </Avatar>
                        </Stack>
                    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection:"row", justifyContent: 'center', gap:2 }}>
                    <Typography variant="h6" sx={{ textShadow: '0 0 1px #000, 0 0 1px #000, 0 0 1px #000' }}> Search </Typography>
                        <TravelExploreIcon sx={{ color: 'black' }} />
                    </Container>
                    <Grid item xs={12} width={250}>
                        <FormControl fullWidth required>
                            <InputLabel id="role-label">Role</InputLabel>
                            <Controller
                                name="role"
                                id="role"
                                defaultValue=""
                                control={control}
                                render={({ field }) => (
                                    <Select labelId="role-label" 
                                    label="Role"
                                    {...field}>
                                        <MenuItem value="Full-Stack">Full-Stack Engineer</MenuItem>
                                        <MenuItem value="Back-End">Back-End</MenuItem>
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} width={250}>
                        <FormControl fullWidth required>
                            <InputLabel id="skill-label">Skill</InputLabel>
                            <Controller
                                name="skill"
                                id="skill"
                                defaultValue=""
                                control={control}
                                render={({ field }) => (
                                    <Select labelId="skill-label"
                                    label="Skill"
                                    {...field}>
                                        <MenuItem value="JavaScript">JavaScript</MenuItem>
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} width={250}>
                        <FormControl fullWidth required>
                            <InputLabel id="service-label">Service</InputLabel>
                            <Controller
                                name="service"
                                id="service"
                                defaultValue=""
                                control={control}
                                render={({ field }) => (
                                    <Select labelId="service-label"
                                    label="service"
                                    {...field}>
                                        <MenuItem value="Freelance">Freelance</MenuItem>
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </Grid>
                    <Button variant="contained" endIcon={<SearchIcon />} type="submit">
                        Search
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default JobsFiller;


