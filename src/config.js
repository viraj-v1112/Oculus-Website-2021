import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyCoJ-VxYIOfogp5_3427zWL8N3tqUZdt_E',
	authDomain: 'oculus2021-c12c7.firebaseapp.com',
	databaseURL: 'https://oculus2021-c12c7-default-rtdb.firebaseio.com',
	projectId: 'oculus2021-c12c7',
	storageBucket: 'oculus2021-c12c7.appspot.com',
	messagingSenderId: '987914637598',
	appId: '1:987914637598:web:d0414faf19724a9cb6b90f',
	measurementId: 'G-G58BWP5DE4'
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
