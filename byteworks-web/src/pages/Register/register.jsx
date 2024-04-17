import { Link } from 'react-router-dom';
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import CssBaseline from "@mui/material/CssBaseline";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Stack from '@mui/material/Stack';

const Register = () => {
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', minHeight: '59vh', mt: 10 }} component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{ width: '100%' }}>
                <Stack justifyContent="center" direction="row" spacing={2} sx={{
                    m: "auto",
                    "& .MuiSvgIcon-root": {
                        fontSize: "8rem",
                    },
                }}>
                    <HowToRegIcon />
                </Stack>
                <Typography variant="h6" color="text.primary" sx={{ textAlign: 'center', mt: 2 }}>
                    Welcome!<br /> Please tell us who you are:
                </Typography>
                <Box sx={{ borderBottom: 1, textAlign: 'center', mt: 2 }}>
                    <Link to="/people" style={{ textDecoration: 'underline'}}>
                        <Tab label="People" />
                    </Link>
                    <Link to="/business" style={{ textDecoration: 'none' }}>
                        <Tab label="Business" />
                    </Link>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;
