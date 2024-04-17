import axios from 'axios';
import { ENDPOINT } from "../config/constans.js";

export async function readProfile(email) {
    try {
        console.log('Request parameters:', { email });
        const response = await axios.get(ENDPOINT.profile, {
            params: {
                email: email
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200) {
            console.log('User profile retrieved successfully:', response.data);
            return response.data;
        } else {
            console.error('Unexpected response status:', response.status);
            throw new Error('An error occurred while retrieving user profile.');
        }
    } catch (error) {
        console.error('Error while fetching user profile:', error.message);
        throw new Error('An error occurred while communicating with the server.');
    }
}
