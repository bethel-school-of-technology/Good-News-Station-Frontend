import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Pages/Landing';

const App = () => (
  <Fragment>
    <Navbar />
    <Landing />
    <h1>Temp Header</h1>
  </Fragment>
)

export default App;
