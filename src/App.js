import React from "react";
import HomePage from './components/HomePage'
import MForm from './components/MUIForm/stepper'
import store from './Redux/store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import comp5 from './components/HomePage/comp5'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/home' component = {HomePage}/>
        <Route exact path='/' component = {MForm}/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
