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
    if (user) {
      await db
        .collection('Users')
        .doc(user.email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setUserData(doc.data());
          }
        });
    }
  };

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const SignIn = async (handleOpen, eventName) => {
    await auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        var docRef = db.collection('Users').doc(res.user.email);
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
          .catch(function (error) {});
      })
      .catch((error) => {});
  };

  const Register = (formData, user, event) => {
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
        Notification('Successfully Registered.', 'success');
        Notification('Our Organizers will contact you shortly!', 'info');
        getUser();
        var emaildata = {
          email: `${user.email}`,
          event: `${event}`,
        };
        // https://oculus-email.herokuapp.com/sendemail
        fetch('https://oculus.spit.ac.in/sendemail', {
          body: JSON.stringify(emaildata),
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'content-type': 'application/json',
          },
          method: 'POST',
          mode: 'cors',
          redirect: 'follow',
          referrer: 'no-referrer',
        }).then(function (response) {});
      })
      .catch(function (error) {});

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
      .then(function () {})
      .catch(function (error) {});
  };

  const Update = async (user, event, handleOpen) => {
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
            .then(function () {})
            .catch(function (error) {});
          var eventUpdate = {};
          eventUpdate[`Events.${event}.date`] = '';
          eventUpdate[`Events.${event}.invoice_number`] = '';
          eventUpdate[`Events.${event}.fees`] = '';
          eventUpdate[`Events.${event}.registered`] = false;
          eventUpdate[`Events.${event}.slotTime`] = '';

          docRef
            .update(eventUpdate)
            .then(function () {
              db.collection('Users')
                .doc(user.email)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    data = doc.data();
                    setUserData(data);
                  }
                });
              Notification('Our Organizers will contact you shortly!', 'info');
              var emaildata = {
                email: `${user.email}`,
                event: `${event}`,
              };

              fetch('https://oculus.spit.ac.in/sendemail', {
                body: JSON.stringify(emaildata),
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                  'content-type': 'application/json',
                },
                method: 'POST',
                mode: 'cors',
                redirect: 'follow',
                referrer: 'no-referrer',
              }).then(function (response) {});
            })
            .catch(function (error) {});
        } else {
          handleOpen();
        }
      })
      .catch(function (error) {});
  };

  const Logout = (message, type) => {
    auth
      .signOut()
      .then(() => {
        Notification(message || 'Successfully Logged Out', type || 'success');
      })
      .catch((error) => {});
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
