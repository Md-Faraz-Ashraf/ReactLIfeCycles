import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

// getiing param from redux in props.
// CDU is called with param.
// action dispatched for child components to use.
// state is set with a condition for intial state.
// done
class Comp1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:{}
        }
    }

    componentDidMount(){
        console.log("Child 1 CDM")
       // console.log("child props",this.props)

    }

    async componentDidUpdate(pP,pS){
        console.log("Child 1 CDU")
        const id = this.props.userId
        const result1=await axios({
            url:`https://jsonplaceholder.typicode.com/posts?userId=${id}`,
            method:'Get'
        })
        this.props.dispatch({
            type:'AddUser',
            payload:result1.data
        })
        //console.log("Result CDU", result1)
        if(Object.keys(this.state.user).length==0){
            console.log("1111")
            this.setState({
                user:result1.data
            })
        }


    }
    render(){
        return(
            <React.Fragment>
                This is Comp 1.{Object.keys(this.state.user).length!==0 && this.state.user[0].title}
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state)=>{
    const{UserId}=state.Model1
    return {
        userId:UserId
    }
}
export default connect(mapStateToProps,null)(Comp1)