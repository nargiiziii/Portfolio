import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("email must be valid format")
    .required("email is required"),
  password: yup
    .string()
    .min(8, "password should be at least 8 characters long")
    .required("password is required"),
});
