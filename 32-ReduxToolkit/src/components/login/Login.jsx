import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginSchema } from "../../schema/loginSchema";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let baseUrl = "http://localhost:3000/users";

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { resetForm }) => {
      let response = await axios(baseUrl);
      let users = response.data;
      let existUser = users.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      if (existUser) {
        console.log("existUser:", existUser);

        await axios.put(`${baseUrl}/${existUser.id}`, {
          ...existUser,
          isLogined: true,
        });
        navigate("/");
        resetForm();
      } else {
        toast.error("email or password incorrect!!");
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

          <p>
           don't have an accaunt? <Link to="/register">sign up</Link>
          </p>
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
