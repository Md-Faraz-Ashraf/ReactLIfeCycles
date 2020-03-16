import React, {useEffectt, useRef }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Form1 from './form1'
import Form2 from './form2'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));



export default function MFormStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [data,setData]=React.useState('')

  const form1Ref = useRef()
  const form2Ref = useRef()

  function getSteps() {
    return ['Form 1', 'Form 2', 'Form 3'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return  <Form1 setDataToValidate={getDataToValidate} ref = {form1Ref}/>
      case 1:
        return <Form2 setDataToValidate={getDataToValidate} ref = {form2Ref}/>
      case 2:
        return " Form 3"
      default:
        return 'Unknown step';
    }
  }

  function getDataToValidate(dv){
      //console.log("Data for validation",dv)
     // setData(dv)
  }
  const steps = getSteps();

  // useEffect(()=>{

  // })


  // function validateData(data){
  //   const keys = Object.keys(data)
  //   const errorsf1 = validateMandatory(data[f1])
  //   const errorsf2 = validateMandatory(data[f2])
    
   
  // }

  const handleNext = () => {
    if(activeStep==0){
      form1Ref.current.validator()
    }
    if( activeStep==1){
      form2Ref.current.validate()
    }
   
    //console.log("ref",form2Ref)
    //console.log(ref.form2Ref)

    // if(activeStep == 0){
    //     const isValid = validateData(data)
    //     console.log("isValid",validateData(data))
    //     if (isValid){
    //         console.log("Data valid")
    //     }
    //     else{
    //         console.log("Data Invalid")
    //         return
    //     }

    // }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography component={'span'} className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
          </div>
        ) : (
          <div>
            <Typography component={'span'}  className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
