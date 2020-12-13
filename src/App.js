import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './layout/Landing';
import Events from './layout/Events';
import TempCard from './components/EventCard/TempCard';
import PlayerFull from './components/EventCard/PlayerFull';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/events' component={TempCard} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
