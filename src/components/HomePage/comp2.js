import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'


class Comp2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userList:[]
        }
    }

    componentDidMount(){
        console.log("Child 2 CDM")
    }
    async componentDidUpdate(pP,pS){
        //Getting the params for api calls from props
        console.log("Child 2 CDU",this.props)
        const id = this.props.userId
        const result1 = await axios({
            url:`https://jsonplaceholder.typicode.com/posts?userId=${id}`,
            method:'Get'
        })
        // When you dispatch an action that changes the object that you have access to as a prop.
        // It re calls CDU !
        //If you need to dispatch action on an object you are recieving from redux as prop.
        // You must check this !!
        if (this.props.UserData==undefined){
            this.props.dispatch({
                type:'AddUserData',
                payload:result1
            })

        }
            
        if(this.state.userList.length==0){
            this.setState({
                userList:result1.data
            })
        }

    }
    render(){
        return(
            <React.Fragment>
                <h1>This is Comp 2 {this.state.userList.length!==0 && this.state.userList[0].title}</h1>
        <h2>Value from Redux { this.props.UserData!==undefined && this.props.UserData.data[0].title}</h2>
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log('REDUX com2',state)
    const {UserId,UserData} = state.Model1
    return {
        userId:UserId,
        UserData
    }
}
export default connect(mapStateToProps,null)(Comp2)