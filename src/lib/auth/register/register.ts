import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { navigate } from "svelte-routing";


export function Register() {
const userRegister = (email:string, password:string) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(async (data) => {
            const user = data.user;
            await setDoc(doc(db, 'users', user.uid),{
                id: user.uid,
                imageUrl: '',
                name: '',
                userName: ''
            });
            navigate("/user/profil", { replace: true });            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });                
    }

    return{
        userRegister
    }
}
    
    