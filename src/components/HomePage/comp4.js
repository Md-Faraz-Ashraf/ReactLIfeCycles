import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'


class Comp4 extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log("Child 4 CDM")

    }
    render(){
        return(
            <React.Fragment>
                This is Comp 4
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state)=>{
    return state
}
export default connect(mapStateToProps,null)(Comp4)