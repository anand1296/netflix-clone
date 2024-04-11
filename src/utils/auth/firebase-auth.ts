import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";

export async function signUpFirebaseApi(email: string, password: string) { 
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
        return userCredential.user;
    })
    .catch((error) => {
        console.log(error);
        throw error;
    });
}

export async function signInFirebaseApi(email: string, password: string) { 
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
        return userCredential.user as any;
    })
    .catch((error) => {
        console.log(error);
        throw error;
    });
}

export async function updateUserFirebaseApi(user: User, displayName: string) { 
    updateProfile(user, {
        displayName, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
        // Profile updated!
        // ...
    }).catch((error) => {
        // An error occurred
        // ...
    });
}