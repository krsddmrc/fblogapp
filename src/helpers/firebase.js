import { initializeApp } from "firebase/app";
import {onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth, signOut, updateProfile} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCQus_EFKhKntwIao0VMiPfbZtGCfyMys0",
    authDomain: "fblogapp-f8291.firebaseapp.com",
    projectId: "fblogapp-f8291",
    storageBucket: "fblogapp-f8291.appspot.com",
    messagingSenderId: "365782348106",
    appId: "1:365782348106:web:e5b3aa2401c2de3db651b3"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export const createUser = async (email, password,displayName, navigate ) => {
    try {
      let userCredential = await createUserWithEmailAndPassword( 
        auth, email, password );
        await updateProfile(auth.currentUser, {
          displayName: displayName,
        });
    
      navigate("/")
      console.log(userCredential);
    } catch (err) {
      
    alert(err.message); }
}
//
export const signIn = async (email, password, navigate) => {
  try {   
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    //toastSuccessNotify("Logged in successfully!");
    console.log(userCredential);
  } catch (err) {
   //toastErrorNotify(err.message);
  alert(err.message);
  }
};
export const logOut=()=>{ 
  signOut(auth);
  alert("logged out successfully");
};

export const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      setCurrentUser(false);
    }
  });
};

