import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

export async function signUpFirebaseApi(email: string, password: string) { 
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        return userCredential.user;
    })
    .catch((error) => {
        const { errorCode, errorMsg } = error;
        return { errorCode, errorMsg };
    });
}

export async function signInFirebaseApi(email: string, password: string) { 
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        return userCredential.user;
    })
    .catch((error) => {
        const { errorCode, errorMsg } = error;
        return { errorCode, errorMsg };
    });
}