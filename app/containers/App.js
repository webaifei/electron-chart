// @flow
import * as React from 'react';
import AppBar from './AppBar';
type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    const { children } = this.props;
    return <React.Fragment>
      <AppBar>
      {children}
      </AppBar>
    </React.Fragment>;
  }
}
