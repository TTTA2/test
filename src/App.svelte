<script lang="ts">
	import { Button } from "flowbite-svelte";
    import Editor from "./lib/Editor.svelte";
    import type { LogCollection, a } from "./log";


	const lg: LogCollection = {
		logItems: [
			{
				title: "test",
				talkItems: [
					{
						head: "a",
						body: "test",
					}
				]
			}
		]

	};

	$: logData = {...lg};

	

</script>

<main>

	<div class="mainContainer">
		<div>
			
			<!-- <Button color="alternative">Alternative</Button> -->
		</div>
		<Editor></Editor>
	</div>

</main>

<style>

	.mainContainer {
		width: 100vw;
		height:100vh;
		display: grid;
		grid-template-rows: auto minmax(0, 1fr);
	}


</style>
