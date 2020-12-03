import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './layout/Landing';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Landing} />
      </Fragment>
    </Router>
  );
};

export default App;
