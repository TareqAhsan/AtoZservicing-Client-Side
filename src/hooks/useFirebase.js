import { useState, useEffect } from "react";
import axios from "axios";
import firebaseinit from "../Pages/Login/Login/Firebase/firebaseinit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  getIdToken,
} from "firebase/auth";

firebaseinit();
const auth = getAuth();
const googleprovider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState();

  const registerUser = (email, password, name, navigate) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser({ email, displayName: name });
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        saveUsertoDb(email, name, "POST");
        setError("");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const login = (email, password, navigate, location) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const redirect = location?.state?.from || "/";
        navigate(redirect);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const googleSignin = (navigate, location) => {
    setLoading(true);
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        saveUsertoDb(user.email, user.displayName, "PUT");
        const redirect = location?.state?.from || "/";
        navigate(redirect);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const logout = (navigate) => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        console.log("logout");

        navigate("/");
        setUser("");
      })
      .catch((error) => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => setToken(idToken));
      } else {
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  useEffect(() => {
    axios(
      `https://ancient-anchorage-18628.herokuapp.com/users/${user?.email}`
    ).then((result) => {
      setAdmin(result.data.admin);
    });
  }, [user?.email]);

  const saveUsertoDb = (email, displayName, method) => {
    const user = { email, displayName };
    fetch(`https://ancient-anchorage-18628.herokuapp.com/users`, {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    registerUser,
    login,
    googleSignin,
    user,
    error,
    loading,
    logout,
    admin,
    token,
  };
};

export default useFirebase;
