import { TextField, Grid, Typography } from "@material-ui/core/";
import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

const Form1 = forwardRef((props, ref) => {

    // The component instance will be extended
    // with whatever you return from the callback passed
    // as the second argument
    useImperativeHandle(ref, () => ({
  
     validate(){
         console.log("Validate from form1 called",state)
     }
  
    }));
  const [state, setState] = useState({
    data: {
      f1: {
        firstname: "",
        lastname: ""
      },
      f2: {
        firstname: "",
        lastname: ""
      }
    },
    errors: {
      f1: {
        firstname: "",
        lastname: ""
      },
      f2: {
        firstname: "",
        lastname: ""
      }
    }
  });
  function validate(){
    console.log("Validaing Form 1")
  }
  useEffect(() => {
    console.log("Form 1 CDU", state);
    props.setDataToValidate(state);
  });
  const handleChange = (prop1, prop2) => event => {
    console.log("props", prop1, prop2);
    setState({
      ...state,
      [prop1]: { ...state[prop1], [prop2]: event.target.value }
    });
  };
  return (
    <Grid container>
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <Typography>Form 1.1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TextField
            id="standard-basic"
            label="First Name"
            value={state.firstname}
            onChange={handleChange("f1", "firstname")}
          />
          <TextField
            id="standard-basic"
            label="Last Name"
            value={state.lastname}
            onChange={handleChange("f1", "lastname")}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary>
          <Typography>Form 1.2</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TextField
            id="standard-basic"
            label="First Name"
            value={state.firstname}
            onChange={handleChange("f2", "firstname")}
          />
          <TextField
            id="standard-basic"
            label="Last Name"
            value={state.lastname}
            onChange={handleChange("f2", "lastname")}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
  );
})

export default Form1