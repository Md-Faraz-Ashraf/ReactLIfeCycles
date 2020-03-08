import React from 'react'
import Comp1 from './comp1'
import Comp2 from './comp2'
import Comp3 from './comp3'
import Comp4 from './comp4'
import {connect} from 'react-redux'
import axios from 'axios'

// Api called in CDM.
// action dispatched to redux for response.
// props changed as new value comes from redux.
// CDU is called and has access to new props.
class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            comp3Prop:''
        }
    }

    async componentDidMount(){
        console.log("Parent CDM")
        const result1 =await axios({
           url:'https://jsonplaceholder.typicode.com/posts',
           method:'Get'
        })
        this.props.dispatch({
            type:'Action1',
            payload:result1.data[0].userId
        })
        this.setState({
            comp3Prop:result1.data[0].userId
        })
    }

    // async componentDidUpdate(){
    //     console.log("CDU parents")
    //     console.log("props",this.props)
    // }
    render(){
        return(
            <React.Fragment>
                <div>
                    <Comp1/>
                </div>
                <div>
                    <Comp2 />
                </div>
                <div>
                    <Comp3 userId={this.state.comp3Prop}/>
                </div>
                <div>
                    <Comp4/>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log("11111111111111")
    return state

}
export default connect(mapStateToProps,null)(HomePage)