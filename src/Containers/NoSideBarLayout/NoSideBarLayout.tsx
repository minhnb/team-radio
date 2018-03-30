import { CustomHeader, Footer } from 'Components';
import {
  ForgotPassword,
  Help,
  Home,
  Login,
  Profile,
  Register,
  ResetPassword,
  Station,
} from 'Pages';
import * as React from 'react';
import { Component } from 'react';
import * as CSSModules from 'react-css-modules';
import { Redirect, Route, Switch } from 'react-router-dom';
import './NoSideBarLayout.scss';

@CSSModules(require('./NoSideBarLayout.scss'))
export class NoSideBarLayout extends Component {
  public render() {
    return (
      <div styleName="root" className="app">
        <CustomHeader />
        <div className="app-body">
          <main styleName="main" className="main">
            <Switch>
              <Route exact path="/" name="Home" component={Home} />
              <Route path="/login" name="Login" component={Login} />
              <Route path="/register" name="Register" component={Register} />
              <Route
                path="/forgot-password"
                name="ForgotPassword"
                component={ForgotPassword}
              />
              <Route
                path="/reset-password"
                name="ResetPassword"
                component={ResetPassword}
              />
              <Route path="/help" name="Help" component={Help} />
              <Route path="/profile" name="Profile" component={Profile} />
              <Route path="/station" name="Station" component={Station} />
              <Route path="/profile" name="Profile" component={Profile} />
              <Redirect from="/" to="/" />
            </Switch>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}
