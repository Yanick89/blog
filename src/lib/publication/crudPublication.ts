import { db, storage } from '../firebase/firebase';
import { doc, setDoc, getDocs, collection, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import { navigate } from 'svelte-routing';
import type { Publication } from '../../table';
import Id from '../../routes/posts/[id].svelte';

let userId: string
export const createPublication = async (data: Publication, editorData: any, imagePublication: File, name: string) => {
   userId = data.userId
    editorData.save().then((outputData: any) => {
        const imageOfPublication = ref(storage, `Publications/imageOfPublication/${data.userId}/${imagePublication.name}`);
        uploadBytes(imageOfPublication, imagePublication)
        .then(()=>{
            getDownloadURL(imageOfPublication).then((url: any)=>{
                let image =  url;                
                const docRef = doc(collection(db, "publications"))
                setDoc(docRef, {
                    id: docRef.id,
                    authorId: data.userId,
                    title: data.title,
                    imagePublication: image,
                    tags: data.tags,
                    content: outputData,
                    describe: data.describe,
                    createdAt: Timestamp.fromDate(new Date())  
                }).then(() => {
                    data.title = '';
                    data.describe = '';
                    editorData.clear()
                    console.log("creation terminée....!");
                    navigate(`/user/${name}`, { replace: true }); 
                })
            })
        })    
    })
}

export const getPublicationAuthor = async () => {
    let publications: any = [];
    const querySnapshot = await getDocs(collection(db, "publications"));
    querySnapshot.forEach((doc) => {
        publications.push(doc.data())
        
    })    
    let newPublications = publications.map((publication) => {    
        if(publication.authorId === userId) {
            return {
                createdAt: new Date(publication.createdAt.seconds * 1000),
            }
        }
        return publication
    })
    return newPublications    
}

// export const getAllPublications = async () => {
//     const querySnapshot = await getDocs(collection(db, "publications"));
//     querySnapshot.forEach((doc) => {
//         console.log(doc.data());
        
//     })    
// }
