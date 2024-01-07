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
    import TextVariantTune from '@editorjs/text-variant-tune';
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
    
        
    onMount(() => {
        editor = new EditorJS({
        holder: 'editorjs',
        tools: {
            textVariant: TextVariantTune,
            image: SimpleImage,
            delimiter: Delimiter,
            underline: Underline,
            code : editorjsCodeflask,
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
    })
</script>

<div id="editorjs"></div>