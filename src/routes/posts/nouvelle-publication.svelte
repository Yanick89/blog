<script lang="ts">
    import HeaderNav from "../../lib/account/header.svelte"
    import Publication from "../../lib/account/publication.svelte"
    import EditorJS from '@editorjs/editorjs'
    import {toolsEditor, dataEditor} from "../../lib/editor/editorDatas"

    let url: any = window.location.pathname,
        title: string = '',
        imgageUrl: string = '',
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

        const imageSelected = () =>{
            const input = document.getElementById('imageUrl') as HTMLInputElement;
            const fileList = input.files;
            for (const file of fileList) {
                const image = URL.createObjectURL(file);
                imgageUrl = image
            }
            
        }
                
</script>
<HeaderNav {title} {showDetails} {url} {imgageUrl} {showPublication}/>

<div id="editorjs">
    <div class="mx-auto w-full max-w-[650px]">
        <input bind:value={title} class="cursor-text w-full text-4xl font-medium my-5 outline-none h-14" type="text" placeholder="Titre">
        <div class="img-photo">
            <div class="container-img">
                {#if imgageUrl}
                <div>
                    <img src={imgageUrl}  alt="photo de profil" />
                  </div>
                {/if}
              <label for="photo">
                📷
              </label>
              <input type="file" id="imageUrl" accept=".jpg, .jpeg, .png, .gif, .webp, image/*"  on:change={imageSelected} />
            </div>
        </div>
        
        <!-- <div class="flex items-center justify-center w-full">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Ajouter une image de publication</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" on:click={imageSelected} />
            </label>
        </div>  -->

    </div>
</div>
{#if showDetails}
    <Publication {showDetails} {editor} {title} {imgageUrl} on:close={() => showDetails = !showDetails}/>
{/if}

<style>
    /* ================* style photo *================ */
  .main-edit .content-edit .img-photo {
    display: flex;
    align-items: center;
  }
  .main-edit .content-edit .img-photo .container-img {
    position: relative;
    height: 150px;
    width: 150px;
    background: var(--orange-color);
    border-radius: 50%;
  }
  .main-edit .content-edit .img-photo .container-img h2{
    font-weight: 800;
    font-size: 53px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    -webkit-text-stroke: 2px;
  }
  .main-edit .content-edit .img-photo .container-img label{
    opacity: 0;
  }
  .main-edit .content-edit .img-photo .container-img img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  .main-edit .content-edit .img-photo .container-img:hover label{
    position: absolute;
    opacity: 1;
    padding: 20px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    cursor: pointer;
    font-size: 1.6rem;
    color: var(--text-dark-primary-light);
  }
  /* ================* write Informations *============ */
</style>



