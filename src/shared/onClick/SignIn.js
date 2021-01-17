import { firebase, auth, db } from '../../config';
import Update from './Update';
const googleProvider = new firebase.auth.GoogleAuthProvider();

const SignIn = (handleOpen, user, eventName) => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      console.log(res);
      var docRef = db.collection('Users').doc(res.user.email);

      docRef
        .get()
        .then(function (doc) {
          if (!doc.exists) {
            handleOpen();
          } else {
            Update(user, eventName);
          }
        })
        .catch(function (error) {
          console.log('Error getting document:', error);
        });
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default SignIn;
