import { TextField, Grid, Typography } from "@material-ui/core/";
import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { connect } from 'react-redux'
import Axios from 'axios'
const Form1 = forwardRef((props, ref) => {
  console.log("######################",props,ref)

    // The component instance will be extended
    // with whatever you return from the callback passed
    // as the second argument
    useImperativeHandle(ref, () => ({
  
     async validator(){
         console.log("Validate from Validator form1 called",state, props)
         const result1 = await Axios({url:`https://jsonplaceholder.typicode.com/posts?userId=${props.Model1.UserId}`,method:'Get'})
         console.log("Result", result1)
     }
  
    }));
  const [state, setState] = useState({
      f1: {
        firstname: "",
        lastname: ""
      },
      f2: {
        firstname: "",
        lastname: ""
      }
  });
  
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
          <Typography component={'span'}>Form 1.1</Typography>
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
          <Typography component={'span'}>Form 1.2</Typography>
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



const connectedComp = forwardRef((props,ref)=>{
  return <Form1 ref ={ref} {...props}/>
})

const mapStateToProps=(state)=>{
  return state
}
export default connect(mapStateToProps,null,null,{forwardRef:true})(connectedComp)