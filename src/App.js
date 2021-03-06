import React from 'react';
import { Route } from "react-router-dom";
import "./App.css";

import {
  LoginFlow,
  HomePage,
  WelcomeNewUser,
  Dashboard,
  ManageEvents,
  EventDetails,
  UserProfile,
  ManagePortfolio,
  Settings,
  Integration
} from "./components";

import ProtectedRoute from './common/auth/ProtectedRouteUI';

const Routes = (props) => {

  return (
    <div className="main">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/welcome" component={WelcomeNewUser} />
      <Route exact path="/login/:user" component={LoginFlow} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <ProtectedRoute path="/setting" component={Settings} />
      <ProtectedRoute path="/integration" component={Integration} />
      <ProtectedRoute path="/profile" component={UserProfile} />
      <ProtectedRoute path="/event/:type" component={ManageEvents} />
      <ProtectedRoute path="/event/details/:id" component={EventDetails} />
      <ProtectedRoute path="/portfolio/:id" component={ManagePortfolio} />
    </div>
  );
}
export default Routes;