import JobsFiller from "../../components/users/JobsFiller.jsx";
import Jobs from "../../components/users/Jobs.jsx";
import Box from "@mui/material/Box";
import { useState } from "react";
import { ENDPOINT } from '../../config/constans.js'
import axios from 'axios';
import CssBaseline from "@mui/material/CssBaseline";

const Users = () => {
  const [filteredJobData, setFilteredJobData] = useState(null);

  const handleFilterSubmit = async (data) => {
    const { role, skill, service } = data;
    const url = `${ENDPOINT.users}?role=${role}&skill=${skill}&service=${service}`;
    try {
      const response = await axios.get(url);
      const { data: { message, jobs } } = response;
      if (message === 'Jobs read successfully!' && jobs.length > 0) {
        const { id, business, role, skill, service } = jobs[0];
        const jobData = { id, business, role, skill, service };
        setFilteredJobData(jobData);
      } else {
        console.error("No Job found or error in fetching jobs.");
      }
    } catch (error) {
      console.error("Error fetching filtered jobs:", error);
    }
  };

  return (
    <Box display="flex" flexDirection="row" p={2} gap={20}>
      <CssBaseline />
      <JobsFiller onSubmit={handleFilterSubmit} />
      {filteredJobData && <Jobs jobData={filteredJobData} />} {/* Updated prop name to jobData */}
    </Box>
  );
};

export default Users;
