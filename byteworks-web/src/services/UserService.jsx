import axios from 'axios';
import { ENDPOINT } from "../config/constans.js";

export async function ReadUserData() {
    try {
        const url = `${ENDPOINT.enterprise}`;
        const response = await axios.get(url);
        if (response.status === 200) {
        console.log("Users retrieved successfully!");
        return response.data;
        } else {
        console.error("Error retrieving Users:", response.data);
        alert('An error occurred while retrieving Users.');
        return [];
        }
    } catch (error) {
        console.error("Error retrieving Users:", error);
        alert('An error occurred while retrieving Users.');
        return [];
    }
}
