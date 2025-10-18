
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../Firebase/Firebase.config';


const gogleProvider =  new GoogleAuthProvider

const Login = () => {
   
    const handleGoogleSignIn = () => {
        // console.log(' gogle button clicked');
        signInWithPopup(auth,gogleProvider)
        .then(result =>{

            console.log(result);
        })
        .catch(error => {
            console.log(error)
        })
    }



    return (
        <div>
            <h2>plaese Login</h2>
            <button  onClick={handleGoogleSignIn} >Sign In With Google</button>
        </div>
    );
};

export default Login;