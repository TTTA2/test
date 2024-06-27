<script lang="ts">

    import { Button } from "flowbite-svelte";
    import MonacoEditor from "./MonacoEditor.svelte";
    import type { LogCollection } from "../log";

    export let logCollection: LogCollection = {
        logItems: []
    };



</script>

<div class="editorContainer">
    {#each logCollection.logItems as l }
        <div>
            {l.title}
        </div>
    {/each}
    <!-- <Button color="alternative">Alternative</Button> -->
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