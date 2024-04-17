import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ApplicantsCard from "./ApplicantsCard";

const Applicants = ({ userData }) => {
    if (!userData) {
        return <Typography variant="body1">No user data found.</Typography>;
    }

    const user = userData;

    return (
        <Box margin="auto" height={300} width={1000} display="flex" flexDirection="row" alignItems="center" gap={1} p={2} sx={{ marginTop: "5px" }}>
            <ApplicantsCard key={user.id} user={user} />
        </Box>
    );
};
  
export default Applicants;

