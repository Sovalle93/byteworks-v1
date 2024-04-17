import React from "react";
import { Card, CardActionArea, CardContent, CardActions, Typography } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { useNavigate } from 'react-router-dom';

const JobsCard = ({ job }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Apply`);
  };
  
  if (!job) {
    return <p>No job data available.</p>;
  }

  return (
    <Card variant="outlined" sx={{ maxWidth: 300 }}>
      <CardActionArea key={job.id}>
        <CardContent sx={{ bgcolor: lightBlue[500], textAlign:'center' }}>
          <Typography variant="h6" color="text.primary">{job.business || "Business not available"}</Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom sx={{ textAlign: 'center' }}>
            Role: {job.role || "Role not available"}<br />
            Skill: {job.skill || "Skill not available"}<br/>
            Service: {job.service || "Service not available"}<br />
          </Typography>
        </CardContent>
        <CardActions sx={{ bgcolor: lightBlue[200] }}>
          <Typography
            size="small"
            variant="text"
            sx={{
              color: "white",
              outline: "none",
            }}
            onClick={() => handleClick(job.id || 0)}
          >
            View Job
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default JobsCard;




