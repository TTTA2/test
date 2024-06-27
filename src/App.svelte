<script lang="ts">
	import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
    import Editor from "./lib/Editor.svelte";
    import type { LogCollection, a } from "./log";

	//@ts-ignore
	import { ChevronDownOutline } from 'flowbite-svelte-icons';


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
			<Button>Dropdown button<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
			<Dropdown>
			<DropdownItem>Dashboard</DropdownItem>
			<DropdownItem>Settings</DropdownItem>
			<DropdownItem>Earnings</DropdownItem>
			<DropdownItem>Sign out</DropdownItem>
			</Dropdown>

			<!-- <Button color="alternative">Alternative</Button> -->
		</div>
		<Editor logCollection={logData}></Editor>
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
