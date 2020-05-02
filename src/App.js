import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Posts from './components/posts/Posts';

const App = () => (
  <Router>
  <Fragment>
    <Navbar />
    <Route exact path='/' component={Landing} />
    <Route exact path='/posts' component={Posts} />
{/* 
    <section className="container">
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </section>
 */}
    <h1>Temp Header</h1>
  </Fragment>
  </Router>
)

export default App;
