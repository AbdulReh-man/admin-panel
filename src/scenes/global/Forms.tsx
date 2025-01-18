import { TextField } from "@mui/material";

const Forms = (props) => {
  const { values, handleChange, touched, errors, handleBlur } = props;
  return (
    <>
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
    </>
  );
};

export default Forms;
