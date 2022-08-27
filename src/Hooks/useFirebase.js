import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithPopup, GoogleAuthProvider, getIdToken } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";

initializeAuthentication()

const useFirebase = () => {
    const [yokooUser, setYokooUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [authToken, setAuthToken] = useState(null)
    const [admin, setAdmin] = useState(false)

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
    const createWebUser = (email, password, name) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name }
                setYokooUser(newUser);
                navigate('/')
                setError('')
                saveYokooUser(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: name
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
    const signinWebuser = (email, password, location) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let destination = location?.state?.from || "/"
                navigate(destination);
                setError('')
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
                getIdToken(user)
                    .then((idToken) => {
                        setAuthToken(idToken)
                    })
            } else {
                setYokooUser({});
            }
            setLoading(false)
        });

        return () => unsubscribed

    }, [auth]);

    // set current user  admin
    useEffect(() => {
        fetch(`http://localhost:5000/users/${yokooUser?.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [yokooUser.email])

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
    const saveYokooUser = (email, displayName, method) => {
        const user = { email, displayName }
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
        authToken,
        admin,
        loading,
        error
    }
};

export default useFirebase;