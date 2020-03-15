import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'


class Comp5 extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log("Child 5 CDM")
        //console.log("Props from 5",this.props)


    }
    render(){
        return(
            <React.Fragment>
                {this.props.Model1.User[0].title}
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log("REDUX stat 5",state)
    return state
}
export default connect(mapStateToProps,null)(Comp5)