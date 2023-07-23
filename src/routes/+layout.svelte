<script>
	import { data, loaded } from '../store/store';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import './styles.css';
	import { onMount } from 'svelte';
	import Loader from '$lib/svg/Loader.svelte';

	onMount(() => {
		const savedStore = window.localStorage.getItem('data');
		if (!savedStore) {
			window.localStorage.setItem('data', JSON.stringify($data));
			loaded.set(true);
			return;
		}
		data.set(JSON.parse(savedStore));
		loaded.set(true);
	});
</script>

<div class="min-h-screen bg-neutral-950 text-white">
	<div class="flex">
		<Sidebar />
		{#if $loaded}
			<main class="grow p-2">
				<slot />
			</main>
		{:else}
			<main class="flex h-screen w-full content-center items-center justify-center">
				<Loader />
			</main>
		{/if}
	</div>
</div>
