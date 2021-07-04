import React from 'react';
import ReactDOM from 'react-dom';
import {RoomProvider}from  "./Context"
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>,
  document.getElementById("root")
);


reportWebVitals();
