import React, { useEffect, useState } from 'react';
import { firebase, auth, db } from '../../config';
import AuthContext from './AuthContext';
import { useToasts } from 'react-toast-notifications';

const AuthState = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const { addToast } = useToasts();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid } = user;
        setUser({
          displayName,
          email,
          uid,
        });
        db.collection('Users')
          .doc(user.email)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setUserData(doc.data());
            }
          });
      } else {
        setUser(null);
        setUserData(null);
      }
    });
  }, []);

  const getUser = async () => {
    // console.log('Get user called');
    if (user) {
      await db
        .collection('Users')
        .doc(user.email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setUserData(doc.data());
          }
        })
  };

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const SignIn = async (handleOpen, eventName) => {
    await auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        var docRef = db.collection('Users').doc(res.user.email);
        // console.log();
        docRef
          .get()
          .then(function (doc) {
            if (!doc.exists) {
              handleOpen();
            } else {
              Notification('Successfully Signed In', 'success');
              const { Events } = doc.data();
              const eventNames = Object.keys(Events);

              const val = eventNames.indexOf(eventName);

              if (val === -1) Update(res.user, eventName);
               else Notification('Already shown Interest!', 'warning');
            }
          })
          .catch(function (error) {
            // console.log('Error getting document:', error);
          });
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  const Register = (formData, user, event) => {
    // Add a new document in collection "cities"
    db.collection('Users')
      .doc(user.email)
      .set({
        Events: {
          [event]: {
            date: '',
            invoice_number: '',
            fees: '',
            registered: false,
            slotTime: '',
          },
        },
        collegeName: formData.college,
        emailID: user.email,
        name: user.displayName,
        number: formData.number,
        uid: user.uid,
      })
      .then(function () {
        // console.log('Document successfully written!');
        Notification('Successfully Registered.', 'success');
        Notification('Our Organizers will contact you shortly!', 'info');
        getUser();
      })
      .catch(function (error) {
        // console.error('Error writing document: ', error);
      });

    db.collection(event)
      .doc(user.email)
      .set({
        Invoice: false,
        fees: '',
        slotTime: '',
        collegeName: formData.college,
        emailID: user.email,
        name: user.displayName,
        number: formData.number,
        registered: false,
        date: '',
        invoice_number: '',
      })
      .then(function () {
        // console.log('Document successfully written!');
      })
      .catch(function (error) {
        // console.error('Error writing document: ', error);
      });
  };

  const Update = async (user, event) => {
    var docRef = db.collection('Users').doc(user.email);

    var data = {};
    var userDoc;
    await docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          userDoc = doc.data();
          db.collection(event)
            .doc(user.email)
            .set({
              Invoice: false,
              fees: '',
              slotTime: '',
              collegeName: userDoc.collegeName,
              emailID: userDoc.emailID,
              name: userDoc.name,
              number: userDoc.number,
              registered: false,
              date: '',
              invoice_number: '',
            })
            .then(function () {
              // console.log('Document successfully written!');
            })
            .catch(function (error) {
              // console.error('Error writing document: ', error);
            });
          var eventUpdate = {};
          eventUpdate[`Events.${event}.date`] = '';
          eventUpdate[`Events.${event}.invoice_number`] = '';
          eventUpdate[`Events.${event}.fees`] = '';
          eventUpdate[`Events.${event}.registered`] = false;
          eventUpdate[`Events.${event}.slotTime`] = '';

          docRef
            .update(eventUpdate)
            .then(function () {
              // console.log('Document successfully updated!');
              db.collection('Users')
                .doc(user.email)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    data = doc.data();
                    // getUser('update');
                    setUserData(data);
                    console.log(data);
                  }
                });
              Notification('Our Organizers will contact you shortly!', 'info');
              // setTimeout(() => {
              //   getUser('up1');
              // }, 5000);
            })
            .catch(function (error) {
              // The document probably doesn't exist.
              // console.error('Error updating document: ', error);
            });
        } else {
          // console.log('Doc doesnt exist');
          Logout();
        }
      })
      .catch(function (error) {
        // console.log('Error getting document:', error);
      });
  };

  const Logout = () => {
    auth
      .signOut()
      .then(() => {
        // console.log('logged out');
        Notification('Successfully Logged Out', 'success');
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  const Notification = (toastMessage, toastType) => {
    addToast(toastMessage, {
      appearance: toastType,
      autoDismiss: true,
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, userData, getUser, SignIn, Register, Update, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
