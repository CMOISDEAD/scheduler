<script>
	// @ts-nocheck
	import EventViewer from '$lib/components/EventViewer.svelte';
	import SelectSubject from '$lib/components/SelectSubject.svelte';
	import OldMan from '$lib/svg/OldMan.svelte';

	let subject = {
		name: '',
		events: []
	};
	function setSubject(value) {
		subject = value;
	}
</script>

<svelte:head>
	<title>calendar</title>
	<meta name="description" content="simple college schedule" />
</svelte:head>

<div class="m-5">
	<div class="h-[93vh] rounded-lg bg-neutral-900/75 p-5">
		<div class="flex h-full justify-between gap-4">
			<SelectSubject {setSubject} />
			<div class="h-full grow">
				{#if subject.name}
					<EventViewer {subject} />
				{:else}
					<div class="flex h-full flex-col content-center items-center justify-center gap-4">
						<OldMan class="h-[20vh] fill-neutral-500" />
						<h3 class="text-neutral-500">select one subject</h3>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
