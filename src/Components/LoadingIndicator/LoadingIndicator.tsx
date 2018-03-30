import * as React from 'react';
import { Component } from 'react';
import * as CSSModules from 'react-css-modules';

@CSSModules(require('./LoadingIndicator.scss'))
export class LoadingIndicator extends Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return <div styleName="loader" />;
  }
}
