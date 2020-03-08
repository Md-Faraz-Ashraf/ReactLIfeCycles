import React from "react";
import HomePage from './components/HomePage'
import store from './Redux/store'
import {Provider} from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <HomePage/>
    </Provider>
  );
}

export default App;
