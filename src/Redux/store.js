import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './Reducers'

const initialState={}
// Saving store to local storage
function saveToLocalStorage(state){
    
    try{
        const serializedState = JSON.stringify(state)
        localStorage.setItem('store',serializedState)
    }
    catch(err){
        console.log(err)
    }
}

// loading from local storage
function loadStoreFromStorage(){
    try{
        console.log("state from local storage", localStorage.getItem('store'))
        const serializedState = localStorage.getItem('store')
        console.log("serializedState",serializedState )
        if (serializedState == null) return undefined
        return JSON.parse(serializedState)
    }catch(err){
        console.log(err)
        return undefined
    }
}

const persistedStore = loadStoreFromStorage()

console.log("Persisted Store",persistedStore )

const store = createStore(rootReducer, persistedStore)


// This makes sure that our redux state is saved local storage, on refresh.
store.subscribe(()=>{ saveToLocalStorage(store.getState())})
export default store