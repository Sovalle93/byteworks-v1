import { Typography, Button,  Box } from "@mui/material";
import { Link } from 'react-router-dom';
export const images = [
    {
      label: (
        <Box
          sx={{
            p: 3,
            minWidth: { md: 850 },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            gap: 0.5,
          }}
        >
          <Box
            component="span"
            sx={{ fontSize: "0.875rem", color: "text.secondary" }}
          >
            <Typography variant="h2" component="h4" textAlign="center">
            We help boost your business ideas
            </Typography>
          </Box>
          <Box
            component="span"
            sx={{
              color: "primary.black",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            
            Through design, innovation, technology and a multidisciplinary team
          </Box>
          <Link to="/register">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "257FEA" }}
          >
            Starts now
          </Button>
          </Link>
        </Box>
      ),
      imgPath: "/src/assets/img/img1.jpg",
    },
    {
      label: (
        <Box
          sx={{
            p: 3,
            minWidth: { md: 850 },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            gap: 0.5,
          }}
        >
          <Box
            component="span"
            sx={{ fontSize: "0.875rem", color: "text.secondary" }}
          >
            <Typography variant="h2" component="h4" textAlign="center">
            Technical excellence
            </Typography>
          </Box>
          <Box
            component="span"
            sx={{
              color: "primary.black",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            More than 1,000,000 people use ByteWorks developments
          </Box>
  
          <Link to="/register">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "257FEA" }}
          >
            Starts now
          </Button>
          </Link>
        </Box>
      ),
      imgPath: "/src/assets/img/img2.jpg",
    },
    {
      label: (
        <Box
          sx={{
            p: 3,
            minWidth: { md: 850 },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            gap: 0.5,
          }}
        >
          <Box
            component="span"
            sx={{ fontSize: "0.875rem", color: "text.secondary" }}
          >
            <Typography variant="h2" component="h4" textAlign="center">
              We are create solutions for you
            </Typography>
          </Box>
          <Box
            component="span"
            sx={{
              color: "primary.black",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
           At Bytework we are specialists in creating successful digital experiences for your audience.
          </Box>
  
          <Link to="/register">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "257FEA" }}
          >
            Starts now
          </Button>
          </Link>
        </Box>
      ),
      imgPath: "/src/assets/img/img3.jpg",
    },
    {
      label: (
        <Box
          sx={{
            p: 3,
            minWidth: { md: 850 },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            gap: 0.5,
          }}
        >
          <Box
            component="span"
            sx={{ fontSize: "0.875rem", color: "text.secondary" }}
          >
            <Typography variant="h2" component="h4" textAlign="center">
            The best technological experience
            </Typography>
          </Box>
          <Box
            component="span"
            sx={{
              color: "primary.black",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
           Technology, innovation, and the best solutions for the digitalization of your business
          </Box>
  
          <Link to="/register">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "257FEA" }}
          >
            Starts now
          </Button>
          </Link>
        </Box>
      ),
      imgPath: "/src/assets/img/img4.jpg",
    },
  ];