import * as React from "react";
import { useNavigate } from 'react-router-dom';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Controller, useForm } from "react-hook-form";
import { RegisterUserService } from "../../../services/RegisterUserService";
import { emailRegex } from "../../../config/constans";


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

// TODO remove the Copyright function to another file.


const defaultTheme = createTheme();

const People = () => {

  const navigate = useNavigate();

  const [skills, setSkills] = React.useState([
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Java",
  ]);

  const { register, handleSubmit, control, formState } = useForm();
  const { errors } = formState;
  const onSubmit = async (data) => {
    const { firstname, email, password, role, skill, status } = data;
    const registrationData = {
      firstname,
      email,
      password,
      role,
      skill,
      status,
    };
    try {
      const response = await RegisterUserService(registrationData);
      if (response && response.success) {
        console.log('Registration successful');
        navigate('/login');
      } else {
        console.error('Registration failed');
        alert('Registration failed. Please check your data.');
      }
    } catch (err) {
      console.error('Error during registration:', err);
      alert('An error occurred while registering');
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#257FEA" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstname"
                  {...register("firstname")}
                  label="Name"
                  required
                  fullWidth
                  id="firstname"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  {...register("email", {
                    required: "Email is Required",
                    pattern: {
                      value: emailRegex,
                      message: "Please Enter a Valid Email",
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  {...register("password", {
                    required: "Password is Required",
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
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
                      {...field}>
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
                  <InputLabel id="role-label">Skill</InputLabel>
                  <Controller
                    name="skill"
                    id="skill"
                    defaultValue={""}
                    control={control}
                    render={({ field }) => (
                      <Select labelId="skill-label" 
                      label="Skill"
                      {...field}>
                        {skills.map((skill) => (
                          <MenuItem key={skill} value={skill}>
                            {skill}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel id="status-label">Status</InputLabel>
                  <Controller
                    name="status"
                    id="status"
                    defaultValue={""}
                    control={control}
                    render={({ field }) => (
                      <Select labelId="role-label"
                      label="Status"
                      {...field}>
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="./login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default People;
