import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './layout/Landing';
import Events from './layout/Events';
import CustomNavbar from './components/Navbar/CustomNavbar';
import Footer from './components/Footer/Footer';
import Sponsor from './layout/Sponsor';
import AOS from 'aos';
import EventState from './context/EventContext/EventState';
import AuthState from './context/AuthContext/AuthState';
import ScrollToTop from 'react-scroll-to-top';

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
							{/* <ScrollToTop smooth color='#6f00ff' /> */}
							<Switch>
								<Route exact path='/' component={Landing} />
								<Route exact path='/events' component={Events} />
								<Route exact path='/sponsors' component={Sponsor} />
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
