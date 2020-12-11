import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './layout/Landing';
import Events from './layout/Events';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Landing} />
        <Route exact path='/events' component={Events} />
      </Fragment>
    </Router>
  );
};

export default App;
