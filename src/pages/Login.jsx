import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
const Login = () => {
  const [IsLogin, setIsLogin] = useState(true);

  const toggleSection = () => {
    setIsLogin(!IsLogin);
  };

  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {IsLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }}>
              <TextField
                label="Email"
                type="text"
                fullWidth
                margin="normal"
                variant="outlined"
                required
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                required
                variant="outlined"
              />
              <Button sx={{ marginTop: "1rem" }} variant="contained" fullWidth>
                Login
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button variant="outlined" fullWidth onClick={toggleSection}>
                sign up
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Register</Typography>
            <form style={{ width: "100%" }}>
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                />

                <IconButton>
                  <>
                    <CameraAltIcon />
                  </>
                </IconButton>
              </Stack>
              <TextField
                label="Name"
                type="text"
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Email"
                type="text"
                fullWidth
                required
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Bio"
                type="text"
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Password"
                type="password"
                required
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <Button sx={{ marginTop: "1rem" }} variant="contained" fullWidth>
                Sign Up
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button variant="outlined" fullWidth onClick={toggleSection}>
                Login
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
