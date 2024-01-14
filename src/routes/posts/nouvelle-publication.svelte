<script lang="ts">
    import HeaderNav from "../../lib/account/header.svelte"
    import Publication from "../../lib/account/publication.svelte"
    import EditorJS from '@editorjs/editorjs'
    import { collection, doc, setDoc, Timestamp  } from "firebase/firestore"
    import { db } from "../../lib/firebase/firebase"
    import {toolsEditor, dataEditor} from "../../lib/editor/editorDatas"
    import { userId } from '../../lib/auth/register/register'

    let url: any = window.location.pathname,
        title: string = '',
        showDetails: boolean = false;

        $: showPublication = () =>{
            showDetails = !showDetails
        }


    let editor: any;
        editor = new EditorJS({
            holder: 'editorjs',
            autofocus: true,
            tools: toolsEditor,
            tunes: ['textVariant'],
            placeholder: 'Commence La rédaction de votre publication ici!',
            data: dataEditor,
        })

        editor.isReady
        .then(() => {
            console.log('Editor.js is ready to work!')
        })
        .catch((reason:any) => {
            console.log(reason)
        });
        
        // const saveData = async () => {
        //     editor.save().then(async(outputData: any) => {
        //       const docRef = doc(collection(db, "publications"))
        //       await setDoc(docRef, {
        //         id: docRef.id,
        //         authorId: userId,
        //         createdAt: Timestamp.fromDate(new Date()),
        //         content: outputData
        //       })
                              
        //     }).catch((error:any) => {
        //         console.log(error)
        //     });
        // }
        
</script>
<HeaderNav {title} {showDetails} {url} {showPublication}/>

<div id="editorjs">
    <div class="mx-auto w-full max-w-[650px]">
        <input bind:value={title} class="cursor-text w-full text-4xl font-medium my-5 border-0 focus:ring-0" type="text" placeholder="Titre">
    </div>
</div>
{#if showDetails}
    <Publication {showDetails} {editor} {title} on:close={() => showDetails = !showDetails}/>
{/if}


