import { auth, db } from "../../../firebase/firebase";
import { doc, setDoc } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, linkWithPopup } from "firebase/auth";
import { navigate } from "svelte-routing";


let provider = new GoogleAuthProvider()
export const authSocialMedia = () =>{
    signInWithPopup(auth, provider)
    .then(async(result) => {
        // Accounts successfully linked.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        const token = credential.accessToken;
        await setDoc(doc(db, 'users', user.uid),{
            id: user.uid,
            imageUrl: user.photoURL,
            name: user.displayName,
            userName: ''
        })
        navigate("/user/profil", { replace: true });
        console.log(user,'  TOKEN:  ', token);
        
      }).catch((error) => {
        // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
      });
    
}