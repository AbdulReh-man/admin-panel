import { FC } from "react";
import { useFormik } from "formik";
import {
  TextField,
  Button,
  Box,
  useTheme,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { validationSchema } from "../../validation/validationschema";
import { tokens } from "../../theme";
import Header from "../../components/header";

const Form: FC = () => {
  const theme = useTheme<Theme>();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const {
    handleBlur,
    handleSubmit,
    errors,
    handleChange,
    values,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      contact: "",
      address1: "",
      address2: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(`Values :  ${JSON.stringify(values, null, 2)}`);
    },
  });
  return (
    <>
      <Header Title='New USer' SubTitle='Create a New User' />
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            marginTop: "2em",
            "& input:-webkit-autofill": {
              WebkitBoxShadow: `0 0 0 30px ${theme.palette.background.default} inset !important`,
              backgroundColor: "transparent",
            },
            "& input:-webkit-autofill:hover": {
              WebkitBoxShadow: `0 0 0 30px ${theme.palette.background.default} inset !important`,
            },
            "& input:-webkit-autofill:focus": {
              WebkitBoxShadow: `0 0 0 30px ${theme.palette.background.default} inset !important`,
            },
            "& input:-webkit-autofill:active": {
              WebkitBoxShadow: `0 0 0 30px ${theme.palette.background.default} inset !important`,
            },
            ".MuiFormHelperText-root": {
              textAlign: "right",
            },
          }}
        >
          <TextField
            id='fname'
            label='FirstName*'
            title='Mandatory'
            value={values.fname}
            onChange={handleChange}
            error={touched.fname && !!errors.fname}
            helperText={touched.fname && errors.fname}
            onBlur={handleBlur}
            fullWidth
            color='secondary'
            autoFocus={true}
            autoComplete='false'
            sx={{
              gridColumn: "span 2",
            }}
          />
          <TextField
            id='lname'
            label='LastName*'
            title='Mandatory'
            value={values.lname}
            onChange={handleChange}
            error={touched.lname && !!errors.lname}
            helperText={touched.lname && errors.lname}
            onBlur={handleBlur}
            fullWidth
            color='secondary'
            sx={{
              gridColumn: "span 2",
            }}
          />

          <TextField
            id='email'
            label='Email*'
            title='Mandatory'
            value={values.email}
            onChange={handleChange}
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
            onBlur={handleBlur}
            fullWidth
            color='secondary'
            sx={{
              gridColumn: "span 4",
            }}
          />
          <TextField
            id='contact'
            label='Contact*'
            title='Mandatory'
            value={values.contact}
            onChange={handleChange}
            error={!!touched.contact && !!errors.contact}
            helperText={touched.contact && errors.contact}
            onBlur={handleBlur}
            fullWidth
            color='secondary'
            sx={{
              gridColumn: "span 4",
            }}
          />
          <TextField
            id='address1'
            label='Address1*'
            title='Mandatory'
            value={values.address1}
            onChange={handleChange}
            error={touched.address1 && !!errors.address1}
            helperText={touched.address1 && errors.address1}
            onBlur={handleBlur}
            fullWidth
            color='secondary'
            sx={{
              gridColumn: "span 4",
            }}
          />
          <TextField
            id='address2'
            label='Address2'
            title='Optional'
            value={values.address2}
            onChange={handleChange}
            error={touched.address2 && !!errors.address2}
            helperText={touched.address2 && errors.address2}
            onBlur={handleBlur}
            fullWidth
            color='secondary'
            sx={{
              gridColumn: "span 4",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              mt: "20px",
              gridColumn: "span 4",
            }}
          >
            <Button
              type='submit'
              variant='contained'
              sx={{
                background: isSubmitting
                  ? colors.blueAccent[500]
                  : colors.greenAccent[500],
              }}
            >
              Create new User
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default Form;
