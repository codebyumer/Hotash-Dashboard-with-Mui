import { useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../FirebaseConfig"; 
import Login from "./LoginPage";
const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
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

  const handleRegister = () => {
    const { name, email, password } = userData;

   if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
   }
   if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }
  try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      alert("Registration Successful!");

      setUserData({
        name: "",
        email: "",
        password: "",
      });
      navigate("/Login");
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Email already exists.");
          break;

        case "auth/invalid-email":
          alert("Invalid email.");
          break;

        case "auth/weak-password":
          alert("Password is too weak.");
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
          Register
        </Typography>

        <TextField
          fullWidth
          label="Name"
          name="name"
          margin="normal"
          value={userData.name}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          margin="normal"
          value={userData.email}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          name="password"
          margin="normal"
          value={userData.password}
          onChange={handleChange}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          onClick={handleRegister}
        >
          Register
        </Button>
      </Paper>
    </Box>
  );
};

export default Register;