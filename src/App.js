import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Search from './containers/search';
import Asset from './containers/asset';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Search} />
          <Route
            path={`${process.env.PUBLIC_URL}/:mediaType/:id`}
            component={Asset}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
