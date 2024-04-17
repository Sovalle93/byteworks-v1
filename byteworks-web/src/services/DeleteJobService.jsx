import axios from 'axios';
import { ENDPOINT } from "../config/constans.js";

export async function deleteJobsService(jobId) {
    console.log('Deleting job with ID:', jobId);

    try {
        const response = await axios.delete(`${ENDPOINT.enterprise}/${jobId}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200) {
            console.log('Job deleted successfully:', response.data);
            alert('Job deleted successfully');
        } else {
            console.error('Unexpected response status:', response.status);
            alert('An error occurred while deleting job. Please try again later.');
        }
    } catch (error) {
        if (error && error.response) {
            if (error.response.status === 400) {
                alert('Could not delete job. Invalid request.');
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

