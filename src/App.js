import React from 'react';
import { Route, Redirect } from "react-router-dom";
import "./App.css";

import {
  LoginFlow,
  HomePage,
  WelcomeNewUser,
  Dashboard,
  ManageEvents,
  EventDetails,
  UserProfile
} from "./components";



const Routes = (props) => {
  const token = localStorage.getItem('token') || '';
  
  
  if (!token) {
    return <Redirect to = '/'/>
  }
  return (
    <div className="main">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/welcome" component={WelcomeNewUser} />
      <Route exact path="/login/:user" component={LoginFlow} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/event/:type" component={ManageEvents} />
      <Route exact path="/event/details/:id" component={EventDetails} />
      <Route exact path="/profile/:id" component={UserProfile} />
    </div>
  );
}
export default Routes;