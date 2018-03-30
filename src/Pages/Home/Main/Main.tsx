import * as React from 'react';
import { Component } from 'react';
import * as CSSModules from 'react-css-modules';

@CSSModules(require('./Main.scss'))
export class Main extends Component {
  public render() {
    return (
      <header styleName="header">
        <div styleName="text-box">
          <h1 styleName="heading-primary">
            <span styleName="main">Team Radio</span>
            <span styleName="sub">
              A Radio station for your team
            </span>
          </h1>
          <div styleName="create-box">
            <input
              placeholder="Your team station"
              styleName="transparent-form-control"
            />
            <i styleName="icon" className="fa fa-paper-plane-o" />
          </div>
        </div>
      </header>
    );
  }
}
