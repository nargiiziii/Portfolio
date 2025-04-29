import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginSchema } from "../../schema/loginSchema"; 
import { useFormik } from "formik"; 

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema, 
    onSubmit: (values) => {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let updatedUsers = [...users];
      let found = false;

      updatedUsers = updatedUsers.map((user) => {
        if (user.email === values.email && user.password === values.password) {
          found = true;
          return { ...user, isLogined: true };
        }
        return { ...user, isLogined: false };
      });

      if (found) {
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        toast.success("logged in successfully!");
      } else {
        toast.error("invalid email or password!!!");
      }
    },
  });

  return (
    <div
      className="login-form-container"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Login</h2>
      <div style={{ width: "300px", display: "flex", flexDirection: "column" }}>
        <form
          onSubmit={formik.handleSubmit} 
          style={{ display: "flex", flexDirection: "column", gap: "18px" }}
        >
          <TextField
            required
            id="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            label={formik.errors ? formik.errors.email : "email"}
          />

          <TextField
            required
            id="password"
            placeholder="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            label={formik.errors ? formik.errors.password : "password"}
          />

          <Button variant="outlined" type="submit">
            Login
          </Button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
