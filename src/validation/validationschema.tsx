import * as yup from "yup";
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export const validationSchema = yup.object().shape({
  fname: yup
    .string()
    .min(3, "Name Should Be Minimum of 3 Characters")
    .max(12, "Name Should Be Maximum of 12 Characters")
    .required("Required"),
  lname: yup
    .string()
    .min(3, "Name Should Be Minimum of 3 Characters")
    .max(12, "Name Should Be Maximum of 12 Characters")
    .required("Required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(11, "Number should be of 11 characters length")
    .required("Contact Number is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  address1: yup.string().required("Required"),
  address2: yup.string().notRequired(),
});
