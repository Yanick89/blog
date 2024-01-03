
import { auth, db } from "../../firebase"
import { onAuthStateChanged } from "firebase/auth"
import { getDocs, collection, doc, updateDoc } from "firebase/firestore"
import type { User } from "../../../../table"

let userId: string

export const getUser = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                userId = user.uid
                const querySnapshot = await getDocs(collection(db, "users"))
                let userData: User | null = null;
                querySnapshot.forEach((doc) => {
                    userData = doc.data() as User;
                })

                resolve(userData);
            } else {
                // Handle the case when there's no authenticated user
                resolve(null);
            }
        }, (error) => {
            // Handle errors from onAuthStateChanged
            reject(error);
        })
    });
}

export const updateUser = async (currentData: User, updateData: User) => {
    // let name = currentData.name
    updateData.name = currentData.name
    updateData.userName = currentData.userName
    updateData.imageUrl = currentData.imageUrl
    updateData.aboutMe = currentData.aboutMe
    updateData.linkedin = currentData.linkedin
    updateData.facebook = currentData.facebook
    updateData.twitterX = currentData.twitterX
    updateData.youtube = currentData.youtube
    const userRef =  doc(db, "users", userId);
    await updateDoc(userRef, {...updateData})    
}
