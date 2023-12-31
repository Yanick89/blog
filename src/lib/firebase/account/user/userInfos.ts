import { auth, db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";

let userInformation: any = {}

const user = auth.currentUser;
const getUserInfos = async () => {
    if (user !== null) {
        const uid = user.uid;
        console.log('User informations: ', uid);
        
        // const querySnapshot = await getDocs(collection(db, "users"));
        //   querySnapshot.forEach((doc) => {
        //     const data = doc.data();
        //     if (data.id === uid) {
        //         userInformation = {...data};
        //         console.log("Document data:", userInformation);                
        //     }
        // })
      }
    // return userInformation
}

export{
    getUserInfos
}