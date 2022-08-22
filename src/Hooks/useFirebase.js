import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

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

    return {
        createWebUser,
        yokooUser,
        error
    }
};

export default useFirebase;