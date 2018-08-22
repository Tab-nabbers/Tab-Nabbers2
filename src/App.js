import React from 'react';
import { Route } from "react-router-dom";
import "./App.css";

import {
  LoginFlow,
  HomePage,
  WelcomeNewUser,
  AddUserInfo
} from "./components";


const Routes = (props) => (
  <div className="main">
    <Route exact path="/" component={HomePage} />
    <Route exact path="/welcome" component={WelcomeNewUser} />
    <Route exact path="/add/info" component={AddUserInfo} />
    <Route exact path="/login/:user" component={LoginFlow} />
  </div>
);
export default Routes;