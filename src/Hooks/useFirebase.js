import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
import { Navigate } from "react-router-dom";

initializeAuthentication()

const useFirebase = () => {
    const [yokooUser, setYokooUser] = useState({})
    const [error, setError] = useState('')

    const auth = getAuth();

    const createWebUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const newUser = { email, displayName: name }
                setYokooUser(newUser)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage)
            });
    }

    const signinWebuser = (email, password, location) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                let destination = location?.state?.from || "/"
                Navigate(destination);
                setYokooUser(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage)
            });
    }

    return {
        createWebUser,
        yokooUser,
        signinWebuser,
        error
    }
};

export default useFirebase;