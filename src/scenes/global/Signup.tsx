import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import {
  StepConnector,
  stepConnectorClasses,
  StepContent,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import Forms from "./Forms";

const InitialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface StepProps {
  completed?: boolean;
}

interface LabelProps {
  optional?: React.ReactNode;
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(17, 104, 81) 0%,rgb(46, 124, 103) 20%,rgb(102, 189, 166) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(10, 94, 71) 0%,rgb(46, 124, 103) 50%,rgb(102, 189, 166) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[600],
    }),
  },
}));

const steps = ["Personal Details", "Documents", "Address"];
const Signup = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handlesubmit = (values: FormValues) => {
    console.log(values);
  };

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const {
    handleBlur,
    handleSubmit,
    errors,
    handleChange,
    values,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: InitialValues,
    onSubmit: (values) => {
      handlesubmit(values);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Stepper
          activeStep={activeStep}
          sx={{
            "& .MuiStepIcon-root": { color: "gray" },
            "& .MuiStepIcon-root.Mui-active": { color: "secondary.main" },
            "& .MuiStepIcon-root.Mui-completed": { color: "secondary.main" },
            [`&.${stepConnectorClasses.completed}`]: {
              [`& .${stepConnectorClasses.line}`]: {
                backgroundImage:
                  "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
              },
            },
          }}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === 0 && (
          <Forms
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
            errors={errors}
            handleChange={handleChange}
            values={values}
            touched={touched}
          />
        )}

        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color='inherit'
            variant='contained'
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button
            onClick={
              activeStep === steps.length ? undefined : () => handleNext()
            }
            color={isSubmitting ? "success" : "secondary"}
            variant='contained'
            type={activeStep === steps.length ? "submit" : "button"}
          >
            {activeStep === steps.length - 1
              ? "Signup"
              : isSubmitting
              ? "Submitting..."
              : "Next"}
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Signup;
