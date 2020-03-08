import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './Reducers'

const initialState={}
const store = createStore(rootReducer, initialState)


export default store