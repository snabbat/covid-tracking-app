import React from 'react';
import './App.css';
// import $ from 'jquery';
// import './assets/css/bootstrap.css';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import CovidApp from './components/CovidApp.jsx'
function App() {
  return (
    <div className="App">
     <CovidApp/>
    </div>
  );
}

export default App;
