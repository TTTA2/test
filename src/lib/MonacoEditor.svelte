<script lang="ts">

    import * as monaco from 'monaco-editor';
    import { onMount } from 'svelte';

	let editorElement: HTMLDivElement;
	let editor: monaco.editor.IStandaloneCodeEditor;
	let model: monaco.editor.ITextModel;
    
    onMount(async () => {   

        const keywords = ["test", "aaaaa"];

        monaco.languages.register({
            id: "hl",
        });

        monaco.languages.registerCompletionItemProvider('hl', {
            triggerCharacters: ["/"],            
            provideCompletionItems: (model, position, context) => {

                const wordUntil = model.getWordUntilPosition(position);
                const range = new monaco.Range(position.lineNumber, wordUntil.startColumn, position.lineNumber, wordUntil.endColumn);
                const replaceRange = new monaco.Range(position.lineNumber, wordUntil.startColumn - 1, position.lineNumber, wordUntil.endColumn);

                const s: monaco.languages.CompletionItem[] = keywords.map(keyword => ({
                    label: keyword,
                    insertText: "",
                    range,
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    detail: "こんにちは\nテストですわ",
                    documentation: "aaaaa",
                    additionalTextEdits: [
                        {
                            range: replaceRange,
                            text: "こんにちは\nテストです\nあああああ\n",
                        }
                    ],
                }));

                return { incomplete: false, suggestions: s}
            }
        });

        editor = monaco.editor.create(editorElement, {
            language: "hl",
            automaticLayout: true,
            });




    });

</script>

<div >
    <div class="edtiorContainer" bind:this={editorElement} />
</div>

<style>
    
    .edtiorContainer {
        width: 100vw;
        height: 100vh;
    }


</style>


