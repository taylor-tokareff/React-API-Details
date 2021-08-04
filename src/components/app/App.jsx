import React, { Component } from 'react';
import FuturamaCharacters from '../../containers/FuturamaCharacters';
import FuturamaDetails from '../../containers/FuturamaDetail';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render() {

    return (
      <Router>

        <Switch>

          <Route path="/" exact={true}
            render={routerProps => (
              <FuturamaCharacters {...routerProps} />
            )}
          />

          <Route path="/character/:character" exact={true}
            render={routerProps => (
              <FuturamaDetails {...routerProps} />
            )}
          />

          <Redirect to="/" />

        </Switch>
      </Router>

    );
  }


}

export default App;
