import { TextField, Grid } from '@material-ui/core/';
import React, {useState, useEffect} from 'react'

const { forwardRef, useImperativeHandle } = React;
const Form2 = forwardRef((props, ref) => {

    // The component instance will be extended
    // with whatever you return from the callback passed
    // as the second argument
    useImperativeHandle(ref, () => ({
     validate(){
         console.log("Validate from form2 called")
     }
    }));


    const [state, setState] = useState(
        {
            'age':'',
            'address':''
        }
    )

    useEffect(()=>
    {
        console.log('Form 2 CDM',state)
        props.setDataToValidate(state)
    },[])

    const handleChange = (prop)=>(event)=>{
        setState({
            ...state,
            [prop]:event.target.value
        })
    }

  
    return(
        <Grid container>
            <TextField id="standard-basic" label="Age" value={state.age} onChange={handleChange('age')} />
            <TextField id="standard-basic" label="Address" value={state.address} onChange={handleChange('address')}/>
        </Grid>
        
    )
  });

// const forwardedForm2  =  forwardRef(Form2)

export default Form2