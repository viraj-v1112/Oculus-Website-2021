import { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Landing from './layout/Landing';
import Events from './layout/Events';
import CustomNavbar from './components/Navbar/CustomNavbar';
import Footer from './components/Footer/Footer';
import Sponsor from './layout/Sponsor';
import AOS from 'aos';
import EventState from './context/EventContext/EventState';
import AuthState from './context/AuthContext/AuthState';

import './App.css';
import 'aos/dist/aos.css';

AOS.init();

const App = () => {
  return (
    <AuthState>
      <EventState>
        <Router>
          <Fragment>
            <CustomNavbar>
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/events' component={Events} />
                <Route exact path='/sponsors' component={Sponsor} />
                <Redirect to='/' />
              </Switch>
              <Footer />
            </CustomNavbar>
          </Fragment>
        </Router>
      </EventState>
    </AuthState>
  );
};

export default App;
