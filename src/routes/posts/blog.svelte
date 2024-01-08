<script lang="ts">
    import EditorJS from '@editorjs/editorjs'
    import Header from '@editorjs/header';
    import Paragraph from '@editorjs/paragraph';
    import SimpleImage from "@editorjs/simple-image";
    import Checklist from '@editorjs/checklist'
    import List from "@editorjs/list";
    import Quote from '@editorjs/quote';
    import Warning from '@editorjs/warning';
    import Delimiter from '@editorjs/delimiter';
    import ToggleBlock from 'editorjs-toggle-block';
    import NestedList from '@editorjs/nested-list';
    import Table from '@editorjs/table';
    import editorjsCodeflask from '@calumk/editorjs-codeflask';
    import Marker from '@editorjs/marker';
    import InlineCode from '@editorjs/inline-code';
    import Underline from '@editorjs/underline';
    import CodeTool from '@editorjs/code';
    import TextVariantTune from '@editorjs/text-variant-tune';
    import Embed from '@editorjs/embed';
    import { onMount } from 'svelte';

    let editor: any,
        data: any = {
            blocks: [
                {
                    type: 'header',
                    data: {
                        text: '',
                        level: 2
                    }
                }
            ]
        };
        
    // onMount(() => {
        editor = new EditorJS({
            holder: 'editorjs',
            autofocus: true,
            tools: {
                textVariant: TextVariantTune,
                image: SimpleImage,
                delimiter: Delimiter,
                underline: Underline,
                // code : editorjsCodeflask,
                code: CodeTool,
                header: {
                    class: Header,
                    inlineToolbar : true,
                    config: {
                        level: [2, 3, 4],
                        defaultLevel: 2
                    },
                },
                paragraph: {
                    class: Paragraph,
                    inlineToolbar: true,
                },
                checklist: {
                    class: Checklist,
                    inlineToolbar: true,
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    }
                },
                quote: {
                    class: Quote,
                    inlineToolbar: true,
                    shortcut: 'CMD+SHIFT+O',
                    config: {
                        quotePlaceholder: 'Enter a quote',
                        captionPlaceholder: 'Quote\'s author',
                    },
                },
                warning: {
                    class: Warning,
                    inlineToolbar: true,
                    shortcut: 'CMD+SHIFT+W',
                    config: {
                        titlePlaceholder: 'Title',
                        messagePlaceholder: 'Message',
                    },
                },
                toggle: {
                    class: ToggleBlock,
                    inlineToolbar: true,
                },
                table: {
                    class: Table,
                    inlineToolbar: true,
                    config: {
                        rows: 2,
                        cols: 3,
                    },
                },
                Marker: {
                    class: Marker,
                    shortcut: 'CMD+SHIFT+M',
                },
                inlineCode: {
                    class: InlineCode,
                    shortcut: 'CMD+SHIFT+M',
                },
                embed: {
                    class: Embed,
                    inlineToolbar: true,
                    config: {
                        services: {
                            youtube: true,
                            coub: true,
                            // codepen: {
                            //     regex: /https?:\/\/codepen.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
                            //     embedUrl: 'https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2',
                            //     html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
                            //     height: 300,
                            //     width: 600,
                            //     id: (groups) => groups.join('/embed/')
                            // }
                        }
                    }
                },
                // list: {
                //     class: NestedList,
                //     inlineToolbar: true,
                //     config: {
                //         defaultStyle: 'unordered'
                //     },
                // }
                
            },
            tunes: ['textVariant'],
            placeholder: 'Commence àcrire la publication ici!',
            onReady: () => {console.log('Editor.js est prêt à commencer le taf')},
            // onChange: (api, event) => {
            //     console.log('Now I know that Editor\'s content changed!', event)
            // }
            data: data

        })

        editor.isReady
        .then(() => {
            console.log('Editor.js is ready to work!')
            /** Do anything you need after editor initialization */
        })
        // .catch((reason) => {
        //     console.log(`Editor.js initialization failed because of ${reason}`)
        // });


        const saveData = () => {
            editor.save().then((outputData: any) => {
            console.log('Article data: ', outputData)
            }).catch((error:any) => {
            console.log('Saving failed: ', error)
            });
            }
    // })
</script>

<div id="editorjs"></div>

<button on:click={saveData}>Save</button>