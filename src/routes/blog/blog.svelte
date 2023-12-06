<script lang="ts">
    //this for testing purpose
    import EditorJS from '@editorjs/editorjs';
    import Header from '@editorjs/header';
    import ImageTool from '@editorjs/image';
    import SimpleImage from "@editorjs/simple-image";
    import List from '@editorjs/list';



    // const ImageTool = window.ImageTool;
    
    
    


const editor = new EditorJS({
    // holder: 'editorjs', 
    holderId : 'editorjs',
    tools:{
        image: SimpleImage,
        header: Header,
        // image: {
        //     class: ImageTool,
        //     config: {
        //         endpoints: {
        //         byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
        //         byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
        //         }
        //     }
        // },
        list: {
            class: List,
            inlineToolbar: true,
            config: {
                defaultStyle: 'unordered'
            }
        }
    },
    
    data: {}
});

console.log(editor);

     
</script>
