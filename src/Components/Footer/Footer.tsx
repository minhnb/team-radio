import * as React from 'react';
import { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <span>Copyright 2018 &copy; <a href="https://www.mgm-tp.com/">mgm</a> . All rights reversed.</span>
        <span className="ml-auto">Powered by <a href="https://www.mgm-tp.com/">mgm</a></span>
      </footer>
    )
  }
}
