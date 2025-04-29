import * as yup from "yup";

export let registerSchema = yup.object({
  name: yup.string().min(3, "name must have at least 3 symbols").required(),
  surname: yup
    .string()
    .min(8, "surname must have at least 8 symbols")
    .required(),
  email: yup.string().email("email must be in valid format").required(),
  password: yup
    .string()
    .min(8, "password is too short, should be 8 chars minimum.")
    .matches(/(?=.*[0-9])/, "password must contain a number and special chars.")
    .required(),
  confirmPass: yup
    .string()
    .oneOf([yup.ref("password"), null], "passwords don't match")
    .required(),
});
