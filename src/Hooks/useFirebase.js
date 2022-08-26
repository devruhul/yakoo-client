import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";

initializeAuthentication()

const useFirebase = () => {
    const [yokooUser, setYokooUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    let navigate = useNavigate()
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // Sign in with google
    const signInWithGoogle = (location) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                let destination = location?.state?.from || "/"
                navigate(destination)
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                saveYokooUser(user.email, user.displayName, 'PUT')
                setYokooUser(user);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage);
            });
    }

    // Sign Up user
    const createWebUser = (userEmail, userPass, userName) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, userEmail, userPass)
            .then((userCredential) => {
                const newUser = { email: userEmail, displayName: userName }
                setYokooUser(newUser);
                navigate('/')
                setError('')
                saveYokooUser(userEmail, userName, 'POST')
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
            })
            .finally(() => setLoading(false));
    }

    // Sign In user
    const signinWebuser = (userEmail, userPass, location) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, userEmail, userPass)
            .then((userCredential) => {
                let destination = location?.state?.from || "/"
                navigate(destination);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage)
            })
            .finally(() => setLoading(false));
    }

    // set user  persist
    useEffect(() => {
        setLoading(true);
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
        setLoading(true);
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

    // save yokoo user
    const saveYokooUser = (userEmail, userName, method) => {
        const user = { userEmail, userName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
            })
    }

    return {
        signInWithGoogle,
        createWebUser,
        yokooUser,
        signinWebuser,
        yokooUserlogout,
        loading,
        error
    }
};

export default useFirebase;