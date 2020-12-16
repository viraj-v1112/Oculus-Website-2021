import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './layout/Landing';
import Events from './layout/Events';
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/events' component={Events} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
