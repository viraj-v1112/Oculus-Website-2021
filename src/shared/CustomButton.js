import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import { db, auth, storage } from '../config';
import 'firebase/auth';

const Button = styled.button`
  border-radius: 2rem;
  border: none;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 1.25rem;
  padding: 0.5rem 1.25rem;
  margin: 0 auto;
  display: block;
`;

// Initialize Firebase

const CustomButton = ({
  buttonText,
  link,
  classname,
  authRequired,
  animation,
  gradient,
  onClick,
}) => {
  var provider = new firebase.auth.GoogleAuthProvider();
  return (
    <Button
      className={classname}
      data-aos={animation}
      style={{
        background: gradient
          ? 'linear-gradient(to right top,#ed00cc,#c722bf,#a32bae,#822e9c,#632c87,#533b8f,#434695,#335097,#176fb5,#008fcd,#00aee0,#00cdef)'
          : 'linear-gradient(to right, #fff,#fff)',
        color: gradient ? '#fff' : '#000',
      }}
      // onClick={onClick}
      onClick={(e) => {
        onClick();
        if (authRequired === 'true') {
          firebase
            .auth()
            .signInWithPopup(provider)
            .then(function (result) {
              // This gives you a Google Access Token. You can use it to access the Google API.
              var token = result.credential.accessToken;
              // The signed-in user info.
              var user = result.user;
              // ...
            })
            .catch(function (error) {
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
      {link ? (
        <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
          {buttonText}
        </Link>
      ) : (
        buttonText
      )}
    </Button>
  );
};

export default CustomButton;
