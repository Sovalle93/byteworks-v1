import ApplicantsFiller from "../../../components/enterprise/ApplicantsFiller.jsx";
import Applicants from "../../../components/enterprise/Applicants";
import Box from "@mui/material/Box";
import { useState } from "react";
import { ENDPOINT } from '../../../config/constans.js'
import axios from 'axios';
import CssBaseline from "@mui/material/CssBaseline";

const SearchApp = () => {
  const [filteredUserData, setFilteredUserData] = useState(null);

  const handleFilterSubmit = async (data) => {
    const { role, skill, status } = data;
    const url = `${ENDPOINT.searchapp}?role=${role}&skill=${skill}&status=${status}`;
    try {
      const response = await axios.get(url);
      const { data: { message, users } } = response;
      if (message === 'Users read successfully!' && users.length > 0) {
        const { id, firstname, role, skill, status } = users[0];
        const userData = { id, firstname, role, skill, status };
        setFilteredUserData(userData);
      } else {
        console.error("No users found or error in fetching users.");
      }
    } catch (error) {
      console.error("Error fetching filtered users:", error);
    }
  };

  return (
    <Box display="flex" flexDirection="row" p={2} gap={20}>
      <CssBaseline />
      <ApplicantsFiller onSubmit={handleFilterSubmit} />
      {filteredUserData && <Applicants userData={filteredUserData} />}
    </Box>
  );
};

export default SearchApp;
