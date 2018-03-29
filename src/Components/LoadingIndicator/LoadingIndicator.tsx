import * as React from 'react';
import { Component } from 'react';
const styles = require('./LoadingIndicator.scss');
// TODO: remove this line
console.log(styles);

export class LoadingIndicator extends Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return <div className={styles.loader} />;
  }
}
