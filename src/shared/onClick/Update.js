import { db } from '../../config';

const Update = (user, event) => {
  // Add a new document in collection "cities"
  var docRef = db.collection('Users').doc(user.email);
  var userDoc;
  docRef
    .get()
    .then(function (doc) {
      if (doc.exists) {
        userDoc = doc.data();
        console.log(user);
        db.collection(event)
          .doc(user.email)
          .set({
            Invoice: false,
            fees: '',
            slotTime: '',
            collegeName: userDoc.collegeName,
            emailID: userDoc.email,
            name: userDoc.displayName,
            number: userDoc.number,
            registered: false,
          })
          .then(function () {
            console.log('Document successfully written!');
          })
          .catch(function (error) {
            console.error('Error writing document: ', error);
          });
      } else {
        console.log('Doc doesnt exist');
      }
    })
    .catch(function (error) {
      console.log('Error getting document:', error);
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
      console.log('Document successfully updated!');
    })
    .catch(function (error) {
      // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
};

export default Update;
