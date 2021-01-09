import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './layout/Landing';
import Events from './layout/Events';
import CustomNavbar from './components/Navbar/CustomNavbar';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import EventState from './context/EventContext/EventState';

import './App.css';
import 'aos/dist/aos.css';

AOS.init();

const App = () => {
	console.log(document.readyState);
	return (
		<EventState>
			<Router>
				<Fragment>
					<CustomNavbar>
						<Switch>
							<Route exact path='/' component={Landing} />
							<Route exact path='/events' component={Events} />
						</Switch>
						<Footer />
					</CustomNavbar>
				</Fragment>
			</Router>
		</EventState>
	);
};

export default App;
