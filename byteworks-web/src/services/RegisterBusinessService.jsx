import axios from 'axios';
import { ENDPOINT } from "../config/constans.js";

export async function RegisterBusinessService(data) {
  if (!data.password) {
    alert('Password is required');
    return;
  }

  console.log('Sending registration data:', data);

  try {
    const response = await axios.post(ENDPOINT.business, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 201) {
      console.log('Registration successful:', response.data);
      alert(response.data.message);
      console.log('Received token:', response.data.token);
      localStorage.setItem('token', response.data.token);
      return { success: true };
    } else {
      console.error('Unexpected response status:', response.status);
      alert('An error occurred while registering');
      return { success: false };
    }
  } catch (err) {
    console.error('Error during registration:', err);
    alert('An error occurred while registering');
    return { success: false };
  }
}
