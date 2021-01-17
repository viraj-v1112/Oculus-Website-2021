import { firebase, auth, db } from '../../config';
import Update from './Update';
const googleProvider = new firebase.auth.GoogleAuthProvider();

const SignIn = async (handleOpen, eventName) => {
	var data;
	await auth
		.signInWithPopup(googleProvider)
		.then((res) => {
			var docRef = db.collection('Users').doc(res.user.email);
			console.log();
			docRef
				.get()
				.then(function(doc) {
					if (!doc.exists) {
						handleOpen();
					} else {
						data = Update(res.user, eventName);
					}
				})
				.catch(function(error) {
					console.log('Error getting document:', error);
				});
		})
		.catch((error) => {
			console.log(error.message);
		});
	return data;
};

export default SignIn;
