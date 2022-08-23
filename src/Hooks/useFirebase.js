import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";

initializeAuthentication()

const useFirebase = () => {
    const [yokooUser, setYokooUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    let navigate = useNavigate()
    const auth = getAuth();

    const createWebUser = (userEmail, userPass, userName) => {
        createUserWithEmailAndPassword(auth, userEmail, userPass)
            .then((userCredential) => {
                const newUser = { email: userEmail, displayName: userName }
                setYokooUser(newUser);
                navigate('/')
                setError('')
                // saveParlourUser(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: userName
                }).then(() => {
                }).catch((error) => {
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage)
            });
    }

    const signinWebuser = (userEmail, userPass, location) => {
        signInWithEmailAndPassword(auth, userEmail, userPass)
            .then((userCredential) => {
                let destination = location?.state?.from || "/"
                navigate(destination);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage)
            });
    }

    // set user  persist
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setYokooUser(user);
                // getIdToken(user)
                //     .then((idToken) => {
                //         setAuthToken(idToken)
                //     })
            } else {
                setYokooUser({});
            }
            setLoading(false)
        });

        return () => unsubscribed

    }, [auth]);

    // user logout
    const yokooUserlogout = () => {
        signOut(auth)
            .then(() => {
                setYokooUser({});
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => setLoading(false));
    }

    return {
        createWebUser,
        yokooUser,
        signinWebuser,
        yokooUserlogout,
        error
    }
};

export default useFirebase;