import * as Yup from "yup";

// const phoneNumberPatton =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const registerValidation = Yup.object({
  userName: Yup.string().required("user name is required").min(2).max(20),
  email: Yup.string().required("email is required").email(),
  password: Yup.string().required("password is required").min(6).max(18),
  confirmPassword: Yup.string()
    .required("confirm password is required")
    .min(6)
    .max(18).oneOf([Yup.ref('password')],'password not matched'),
});


export const loginValidation = Yup.object({
  email: Yup.string().required("email is required").email(),
  password: Yup.string().required("password is required").min(6).max(18),
});