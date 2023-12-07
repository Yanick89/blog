<script lang="ts">

    import EditorJS from '@editorjs/editorjs';
    import Header from '@editorjs/header';
    import ImageTool from '@editorjs/image';
    import SimpleImage from "@editorjs/simple-image";
    import List from '@editorjs/list';
    import Paragraph from '@editorjs/paragraph';
    import LinkTool from '@editorjs/link';
    import RawTool from '@editorjs/raw';
    import Checklist from '@editorjs/checklist';
    import Quote from '@editorjs/quote';
    import CodeTool from '@editorjs/code';
    import Table from '@editorjs/table'
    
    import { onMount } from 'svelte';

    
    let content: any = null;

    const DEFAULT_INITIAL_DATA =  {
        "time": new Date().getTime(),
        "blocks": [
            // {
            //     "type": "image",
            //     "data": {
            //         "url": "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg",
            //         "caption": "Roadster // tesla.com",
            //         "withBorder": false,
            //         "withBackground": false,
            //         "stretched": true
            //     }
            // },
            // {
            //     "type" : "linkTool",
            //     "data" : {
            //         "link" : "https://codex.so",
            //         "meta" : {
            //             "title" : "CodeX Team",
            //             "site_name" : "CodeX",
            //             "description" : "Club of web-development, design and marketing. We build team learning how to build full-valued projects on the world market.",
            //             "image" : {
            //                 "url" : "https://codex.so/public/app/img/meta_img.png"
            //             }
            //         }
            //     }
            // }
        ]
    }
    
    let EditInstance: any;

    $: ejInstance = EditInstance; 

    const editor = new EditorJS({
        holder: 'editorjs', 
        tools:{
            image: SimpleImage,
            header: Header,
            raw: RawTool,
            checklist: {
                class: Checklist,
                inlineToolbar: true,
                },
                quote: {
                    class: Quote,
                    inlineToolbar: true,
                    shortcut: 'CMD+SHIFT+O',
                    config: {
                        quotePlaceholder: 'Enter a quote',
                        captionPlaceholder: 'Quote\'s author',
                    }
                },
                table: {
                class: Table,
                inlineToolbar: true,
                    config: {
                        rows: 2,
                        cols: 3,
                    }
                },
                code: CodeTool,
            // image: {
            //     class: ImageTool,
            //     inlineToolbar: ['link'],
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
            },
            linkTool: {
                class: LinkTool,
                config: {
                    endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching,
                }
            },
            paragraph: {
                class: Paragraph,
                inlineToolbar: true,
            },
        },
        // onReady: () => {
        //     ejInstance.current = editor.current;
        // },
        autofocus: true,
        data: DEFAULT_INITIAL_DATA,
        onChange: async () => {
            content = await editor.saver.save();
        }
    });

    console.log(content);
</script>

<div id='editorjs'></div>
