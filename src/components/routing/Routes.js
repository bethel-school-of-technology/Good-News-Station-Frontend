import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import ProfileForm from '../profile-forms/ProfileForm';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import About from '../contact/About';
import Help from '../contact/Help';
import Contact from '../contact/Contact';
import CuratedNews from '../TopWebNews/CuratedNews';
import UserSpotlight_1 from '../user-spotlight/UserSpotlight_1'
import UserSpotlight_2 from '../user-spotlight/UserSpotlight_2'
import UserSpotlight_3 from '../user-spotlight/UserSpotlight_3'
import UserSpotlight_4 from '../user-spotlight/UserSpotlight_4'

const Routes = props => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path='/gnspicks' component={CuratedNews} />
        <Route exact path='/UserSpotlight_1' component={UserSpotlight_1} />
        <Route exact path='/UserSpotlight_2' component={UserSpotlight_2} />
        <Route exact path='/UserSpotlight_3' component={UserSpotlight_3} />
        <Route exact path='/UserSpotlight_4' component={UserSpotlight_4} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/about" component={About} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/contact" component={Contact} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={ProfileForm} />
        <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />

        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
