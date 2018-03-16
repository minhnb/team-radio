import * as React from 'react';
import { Component } from 'react';
import './Main.scss';
import { Setting } from "../../../Components/Setting";

export class Main extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Team Radio</span>
            <span className="heading-primary--sub">
              A Radio station for your team
            </span>
            <Setting/>
          </h1>
        </div>
      </header>
    );
  }
}
