import axios from 'axios';
import { ENDPOINT } from "../config/constans.js";
import { getAuthTokenFromStorage } from '../utils/authUtils.js';

export async function validateLoginData({ email, password }) {
  try {
    const response = await axios.post(ENDPOINT.login, { email, password }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthTokenFromStorage()}`
      },
    });

    console.log('Response from server:', response);

    if (response.status === 200) {
      const { token, userType } = response.data;
      localStorage.setItem('token', token);
      if (userType.includes('user')) {
        return '/users';
      } else if (userType.includes('business')) {
        return '/enterprise';
      } else {
        console.error('Login failed:', userType);
        alert('Login failed. Please check your credentials.');
        return false;
      }
    } else {
      console.error('Login failed:', response.status, response.data);
      alert('Login failed. Please check your credentials.');
      return false;
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert('An error occurred during login. Please try again.');
    return false;
  }
}
