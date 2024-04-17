import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Avatar, Stack, Container, Tab } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import TabList from '@mui/lab/TabList';
import Link from "@mui/material/Link";
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { lightBlue } from "@mui/material/colors";
import { Link as RouterLink } from 'react-router-dom';
import { useUserContext } from '../../context/ByteContext';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { readProfile } from "../../services/ProfileService"

function Profile() {
    const { user } = useUserContext();
    const [tabValue, setTabValue] = useState("0");
    const [profileData, setProfileData] = useState(null);
    const [handleDashboardButtonClick, setHandleDashboardButtonClick] = useState(null);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await readProfile(user.email);
                if (response.success) {
                    const { user: userData, userType, tableName } = response;
                    setProfileData(userData);
                    if (userType === "user") {
                        setHandleDashboardButtonClick("/users");
                    } else if (userType === "business") {
                        setHandleDashboardButtonClick("/enterprise");
                    }
                } else {
                    console.error('Error fetching user profile:', response.error);
                }
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
        fetchData();
    }, [])

    return (
        <ThemeProvider theme={createTheme()}>
            <Card sx={{
                width: 500,
                height: 500,
                m: "auto",
                mt: 5,
                p: 3,
            }}>
                <CssBaseline />
                <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                    <Avatar sx={{ bgcolor: lightBlue[500] }}>{profileData?.firstname ? profileData.firstname.charAt(0) : ''}</Avatar>
                </Stack>
                <CardContent sx={{
                    display:"flex",
                    flexDirection:"column",
                    gap:1,
                }}>
                    <Typography sx={{ fontSize: 25 }} component="div">
                        {profileData?.firstname}
                    </Typography>
                    <Divider />
                    <Typography sx={{ fontSize: 20 }} color="text.secondary">
                        {profileData?.role}
                    </Typography>
                    <Divider />
                    <Typography sx={{ fontSize: 13 }} color="text.secondary"gutterBottom>
                        {profileData?.status || profileData?.service || 'No status or service available'}
                    </Typography>
                    <Divider />
                    <Typography sx={{ fontSize: 15}} color="text.secondary"gutterBottom>
                        {profileData?.skill}
                    </Typography>
                </CardContent>
                <Container sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: 2,
                    border: "2px solid #1976D2",
                }}>
                    <TabContext value={tabValue}>
                        <TabList onChange={handleTabChange}>
                            <Tab label="Workflow" value="0" />
                            <Tab label="Connections" value="1" />
                        </TabList>
                        <TabPanel value="0">Workflow</TabPanel>
                        <TabPanel value="1">Connections</TabPanel>
                    </TabContext>
                </Container>
                <Button variant="contained" color="primary" component={RouterLink} to={handleDashboardButtonClick}>Go to Dashboard</Button>
            </Card>
            <Typography variant="body2" color="text.secondary" align="center" mt={5}>
                {"Copyright © "}
                <Link color="inherit" href="https://byteworks.cl">
                    ByteWorks
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        </ThemeProvider>
    );
}

export default Profile;

