import { useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import Dashboard from "./Dashboard";
import Register from "./RegisterPage";
const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const { email, password } = userData;

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Login Successful!");

      setUserData({
        email: "",
        password: "",
      });

      navigate("/Dashboard");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Invalid email or password.");
          break;

        case "auth/user-not-found":
          alert("User not found.");
          break;

        case "auth/wrong-password":
          alert("Incorrect password.");
          break;

        case "auth/invalid-email":
          alert("Invalid email.");
          break;

        default:
          alert(error.message);
      }
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 400,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          mb={3}
        >
          Login
        </Typography>

        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          margin="normal"
          value={userData.email}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          margin="normal"
          value={userData.password}
          onChange={handleChange}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Typography
          textAlign="center"
          sx={{ mt: 2 }}
        >
          Don't have an account?{" "}
          <Button
            variant="text"
            onClick={() => navigate("/Register")}
          >
            Register
          </Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;