import axios from 'axios';
import { ENDPOINT } from "../config/constans.js";

export async function seeJobsService() {
    try {
        const response = await axios.get(ENDPOINT.enterprise, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            console.log('Jobs fetched successfully:', response.data);
            return response.data;
        } else {
            console.error('Failed to fetch jobs:', response.status);
            throw new Error('Failed to fetch jobs. Please try again later.');
        }
    } catch (error) {
        console.error('Error while fetching jobs:', error);
        if (error.response) {
            if (error.response.status === 400) {
                throw new Error('Invalid request. Please try again.');
            } else {
                throw new Error('Server error. Please try again later.');
            }
        } else if (error.request) {
            throw new Error('No response received from the server. Please try again later.');
        } else {
            throw new Error('An unexpected error occurred. Please try again later.');
        }
    }
}
