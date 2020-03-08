import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'


class Comp3 extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            userList:''
        }
    }

    componentDidMount(){
        console.log("Child 3 CDM")
    }

    static async getDerivedStateFromProps(props,state) {
        console.log("Child 3 GDSFP")
        console.log("11110",props)
            const result1= await axios(
                {
                    url:`https://jsonplaceholder.typicode.com/posts?userId=${props.userId}`,
                    method:'Get'
                }
            )
            console.log("!@!@!@",result1)
            console.log("!!!!!!",state)
            if (state.userList==''){
                console.log("90909000900000")
                return{
                    userList:result1.data
                }

            }
            return null
           
    }
    componentDidUpdate(pP,pS){
        console.log("************",this.state)
        console.log("Child 3 CDU",pP,pS)
    }

    render(){
        console.log("Render State",this.state)
        return(
            <React.Fragment>
                This is Comp 3
            </React.Fragment>
        )
    }

}

// const mapStateToProps=(state)=>{
//     return state
// }
export default Comp3