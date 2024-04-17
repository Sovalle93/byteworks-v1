import { validateLoginData } from '../../services/LoginService';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useUserContext } from '../../context/ByteContext';


const HandleLogin = () => {
  const { formData, setFormData, login } = useUserContext()
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const redirectPath = await validateLoginData(formData);
      console.log('Redirect Path:', redirectPath);
      if (redirectPath) {
        console.log('Login successful!');
        login(formData.email, formData.password);
        navigate(redirectPath);
      } else {
        console.error('Login failed');
        alert('Login failed. Please check your credentials.');
      }
    } catch (err) {
      console.error('Error during login:', err);
      alert('An error occurred while logging in');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, bgcolor: '257FEA' }}
      >
        Sign In
      </Button>
    </Box>
  );
};

export default HandleLogin;
