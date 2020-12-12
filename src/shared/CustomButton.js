import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

const Button = styled.button`
	background: linear-gradient(to right, #ed00cc, #3f2669, #3700af, #00cdef);
	border-radius: 2rem;
	border: none;
	color: #fff;
	font-family: Montserrat;
	font-weight: bold;
	font-size: 1.25rem;
	padding: 0.5rem 1.25rem;
	margin: 0 auto;
	display: block;
`;

var firebaseConfig = {
	apiKey: 'AIzaSyCoJ-VxYIOfogp5_3427zWL8N3tqUZdt_E',
	authDomain: 'oculus2021-c12c7.firebaseapp.com',
	projectId: 'oculus2021-c12c7',
	storageBucket: 'oculus2021-c12c7.appspot.com',
	messagingSenderId: '987914637598',
	appId: '1:987914637598:web:d0414faf19724a9cb6b90f',
	measurementId: 'G-G58BWP5DE4'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const CustomButton = ({ buttonText, link, classname, authRequired, animation }) => {
	var provider = new firebase.auth.GoogleAuthProvider();
	return (
		<Button
			className={classname}
			data-aos={animation}
			onClick={(e) => {
				if (authRequired === 'true') {
					firebase
						.auth()
						.signInWithPopup(provider)
						.then(function(result) {
							// This gives you a Google Access Token. You can use it to access the Google API.
							var token = result.credential.accessToken;
							// The signed-in user info.
							var user = result.user;
							// ...
						})
						.catch(function(error) {
							// Handle Errors here.
							var errorCode = error.code;
							var errorMessage = error.message;
							// The email of the user's account used.
							var email = error.email;
							// The firebase.auth.AuthCredential type that was used.
							var credential = error.credential;
							// ...
						});
				}
			}}
		>
			<Link to={link} style={{ textDecoration: 'none', color: '#fff' }}>
				{buttonText}
			</Link>
		</Button>
	);
};

export default CustomButton;
