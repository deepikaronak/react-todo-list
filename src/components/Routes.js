import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import { NavBar } from './NavBar';
import { Todos } from './Todos';
import { About } from './About';

class _Routes extends Component {
  render() {
    const { classes } = this.props;

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <Route path="/" component={NavBar} />
          <div className={classes.content}>
            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/about" component={About} />
              <Route exact path="/todos" component={Todos} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
  },
};

export const Routes = withStyles(styles)(_Routes);