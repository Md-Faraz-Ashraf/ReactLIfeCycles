const initialState={}

export default function comp1Red(state=initialState,action){
    if(action.type==='Action1'){
        return {
            ...state, UserId:action.payload
        }
    }
    if(action.type==='AddUser'){
        return {
            ...state, User:action.payload
        }
    }
    if(action.type==='AddUserData'){
        return {
            ...state, UserData:action.payload
        }
    }
    if(action.type==='Action4'){
        return {
            ...state, Model4:action.payload
        }
    }
    return state
}