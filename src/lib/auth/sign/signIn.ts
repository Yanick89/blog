import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { navigate } from "svelte-routing";


export function signIn(){
    const userSignIn = (email:string, password:string) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('utilisateur:', user);
            navigate(`/`, { replace: true })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    return{
        userSignIn
    }
}