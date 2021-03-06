import React, { Component } from 'react';
import { CssBaseline } from '@material-ui/core';

import { Routes } from './Routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
          <Routes />
      </React.Fragment>
    );
  }
}

export default App;