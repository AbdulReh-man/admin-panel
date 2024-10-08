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

interface MyFormValues {
  fname: string;
  lname: string;
  email: string;
  contact: string;
  address1: string;
  address2: string;
}

const Form: FC = () => {
  const theme = useTheme<Theme>();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const formicform = useFormik<MyFormValues>({
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
      <form onSubmit={formicform.handleSubmit}>
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
            value={formicform.values.fname}
            onChange={formicform.handleChange}
            error={formicform.touched.fname && !!formicform.errors.fname}
            helperText={formicform.touched.fname && formicform.errors.fname}
            onBlur={formicform.handleBlur}
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
            value={formicform.values.lname}
            onChange={formicform.handleChange}
            error={formicform.touched.lname && !!formicform.errors.lname}
            helperText={formicform.touched.lname && formicform.errors.lname}
            onBlur={formicform.handleBlur}
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
            value={formicform.values.email}
            onChange={formicform.handleChange}
            error={formicform.touched.email && !!formicform.errors.email}
            helperText={formicform.touched.email && formicform.errors.email}
            onBlur={formicform.handleBlur}
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
            value={formicform.values.contact}
            onChange={formicform.handleChange}
            error={!!formicform.touched.contact && !!formicform.errors.contact}
            helperText={formicform.touched.contact && formicform.errors.contact}
            onBlur={formicform.handleBlur}
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
            value={formicform.values.address1}
            onChange={formicform.handleChange}
            error={formicform.touched.address1 && !!formicform.errors.address1}
            helperText={
              formicform.touched.address1 && formicform.errors.address1
            }
            onBlur={formicform.handleBlur}
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
            value={formicform.values.address2}
            onChange={formicform.handleChange}
            error={formicform.touched.address2 && !!formicform.errors.address2}
            helperText={
              formicform.touched.address2 && formicform.errors.address2
            }
            onBlur={formicform.handleBlur}
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
                background: formicform.isSubmitting
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
