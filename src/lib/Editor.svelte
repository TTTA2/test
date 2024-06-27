<script>

    import { Button } from "flowbite-svelte";
    import MonacoEditor from "./MonacoEditor.svelte";

</script>

<div class="editorContainer">
    <Button color="alternative">Alternative</Button>
    <MonacoEditor></MonacoEditor>
</div>

<style>
    
    .editorContainer {

        display: grid;
        grid-template-columns: 0.5fr minmax(0, 0.5fr);

        width: 100%;
        height: 100%;       
    }

</style>