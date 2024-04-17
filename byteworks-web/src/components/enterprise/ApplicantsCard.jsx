import React from "react";
import { Card, CardActionArea, CardContent, CardActions, Typography} from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { useNavigate } from 'react-router-dom';

const ApplicantsCard = ({ user }) => {
  const navigate = useNavigate();

  const handleClick = (userId) => {
    navigate(`/Profile/${userId}`);
  };

  if (!user) {
    return <p>No user data available.</p>;
  }

  return (
    <Card variant="outlined" sx={{ maxWidth: 300 }}>
      <CardActionArea key={user.id}>
        <CardContent sx={{ bgcolor: lightBlue[500], textAlign:'center' }}>
          <Typography variant="h6" color="text.primary">{user.firstname || "Name not available"}</Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom sx={{ textAlign: 'center' }}>
            Role: {user.role || "Role not available"}<br />
            Skill: {user.skill || "Skill not available"}<br/>
            Status: {user.status || "Status not available"}<br />
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
            onClick={() => handleClick(user.id || 0)}
          >
            View Profile
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default ApplicantsCard;


