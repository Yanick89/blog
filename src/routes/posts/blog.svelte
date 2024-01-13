<script lang="ts">
    import HeaderNav from "../../lib/account/header.svelte"
    import EditorJS from '@editorjs/editorjs'
    import { collection, doc, setDoc } from "firebase/firestore"
    import { db } from "../../lib/firebase/firebase"
    import {toolsEditor, dataEditor} from "../../lib/editor/editorDatas"

    let url: any = window.location.pathname;

    let editor: any,
        onReady = () => {
            saveData()
        };
        
        editor = new EditorJS({
            holder: 'editorjs',
            autofocus: true,
            tools: toolsEditor,
            tunes: ['textVariant'],
            placeholder: 'Commence La rédaction de votre publication ici!',
            data: dataEditor,
            onReady : onReady
        })

        editor.isReady
        .then(() => {
            console.log('Editor.js is ready to work!')
        })
        .catch((reason:any) => {
            console.log(reason)
        });
        
        const saveData = () => {
             editor.save().then(async(outputData: any) => {
              const docRef = doc(collection(db, "publications"))
              await setDoc(docRef, {
                id: docRef.id,
                authorId: "admin",
                title: "Blog",
                createdAt: new Date().getTime(),
                content: outputData
              })
                              
            }).catch((error:any) => {
                console.log(error)
            });
        }
        
</script>
<HeaderNav {url}/>
<div id="editorjs"></div>

<button on:click={saveData}>Save</button>
