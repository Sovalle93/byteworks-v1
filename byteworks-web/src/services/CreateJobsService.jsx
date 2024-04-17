import axios from 'axios';
import { ENDPOINT } from "../config/constans.js";

export async function createJobsService(data) {
    console.log('Sending job data:', data);

    try {
        const response = await axios.post(ENDPOINT.createjobs, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 201) {
            console.log('Job created successfully:', response.data);
            alert('Job created successfully');
        } else {
            console.error('Unexpected response status:', response.status);
            alert('An error occurred while creating job. Please try again later.');
        }
    } catch (error) {
        if (error && error.response) {
            if (error.response.status === 400) {
                alert('Invalid data. Please check your inputs and try again.');
            } else {
                alert('An error occurred while communicating with the server.');
            }
        } else if (error && error.request) {
            alert('No response received from the server. Please try again later.');
        } else {
            alert('An unexpected error occurred. Please try again later.');
        }
    }
}
