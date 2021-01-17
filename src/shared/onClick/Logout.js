import { auth } from '../../config';

const Logout = () => {
	auth
		.signOut()
		.then(() => {
			console.log('logged out');
		})
		.catch((error) => {
			console.log(error.message);
		});
};

export default Logout;
