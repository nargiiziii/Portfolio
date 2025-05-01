import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { registerSchema } from "../../schema/registerSchema";
import axios from "axios";
import uuid from "react-uuid";
import { Link } from "react-router-dom";

const Register = () => {
  const [users, setUsers] = useState([]);

  let baseUrl = "http://localhost:3000/users";

  useEffect(() => {
    let allUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(allUsers);
  }, []);

  const { values, handleChange, handleSubmit, errors, resetForm } = useFormik({
    initialValues: {
      id: uuid(),
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPass: "",
      isLogined: false,
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      let response = await axios(baseUrl);
      let users = response.data;
      let existUser = users.find((user) => user.email === values.email);

      if (!existUser) {
        await axios.post(baseUrl, values);
        resetForm();
        toast("register succesfully!!");
      } else {
        toast.error("user alredy exist!!!");
      }
    },
  });

  const { name, surname, email, password, confirmPass } = values;

  return (
    <div
      className="register-form-container"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Register</h2>
      <div style={{ width: "300px", display: "flex", flexDirection: "column" }}>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "18px" }}
        >
          <TextField
            required
            id="name"
            label={errors ? errors.name : "Name"}
            placeholder="name"
            value={name}
            onChange={handleChange}
          />

          <TextField
            required
            id="surname"
            label={errors ? errors.surname : "Surname"}
            placeholder="surname"
            value={surname}
            onChange={handleChange}
          />

          <TextField
            required
            id="email"
            label={errors ? errors.email : "email"}
            placeholder="email"
            value={email}
            onChange={handleChange}
          />

          <TextField
            required
            id="password"
            label={errors ? errors.password : "password"}
            placeholder="password"
            type="password"
            value={password}
            onChange={handleChange}
          />

          <TextField
            required
            id="confirmPass"
            label={errors ? errors.confirmPass : "confirm password"}
            placeholder="confirm password"
            type="password"
            value={confirmPass}
            onChange={handleChange}
          />

          <p>
            user already exist? <Link to="/login">sign in</Link>
          </p>
          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
