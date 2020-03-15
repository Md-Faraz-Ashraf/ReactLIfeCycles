import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import comp5 from './comp5'
import { withRouter } from 'react-router-dom'


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

    handleClick = ()=>{
        console.log("click to 5")
        this.props.history.push('/comp5')
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
                <button onClick={this.handleClick}>Buutton to comp5</button>
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log("REDUX comp1",state)
    const{UserId}=state.Model1
    return {
        userId:UserId
    }
}
export default withRouter(connect(mapStateToProps,null)(Comp1))