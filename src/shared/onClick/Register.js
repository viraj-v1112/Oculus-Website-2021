import {firebase,db} from '../../config';

const Register = (formData, user, event) => {
    var db = firebase.firestore();
    // Add a new document in collection "cities"
    db.collection("Users").doc(user.email).set({
        Events: {
            [event]: {
                'date': '',
                'invoice_number':'',
                'fees': '',
                'registered': false,
                'slotTime': '',
            }
        },
        collegeName: formData.college,
        emailID: user.email,
        name: user.displayName,
        number: formData.number,
        uid: user.uid,
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

    db.collection(event).doc(user.email).set({
        Invoice:false,
        fees: '',
        slotTime: '',
        collegeName: formData.college,
        emailID: user.email,
        name: user.displayName,
        number: formData.number,
        registered: false
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}

export default Register