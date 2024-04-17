import axios from 'axios';
import { ENDPOINT } from "../config/constans.js";

export async function CreateBusinessService(data) {
  try {
    const response = await axios.post(`${ENDPOINT.business}/create-business`, data);
    if (response.status === 201) {
      console.log("Business created successfully!");
    } else {
      console.error("Error creating business:", response.data);
      alert('An error occurred while creating the business.');
    }
  } catch (error) {
    console.error("Error creating business:", error);
    alert('An error occurred while creating the business.');
  }
}
