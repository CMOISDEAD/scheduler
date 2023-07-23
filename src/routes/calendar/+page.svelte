<script>
	// @ts-nocheck
	import EventViewer from '$lib/components/EventViewer.svelte';
	import SelectSubject from '$lib/components/SelectSubject.svelte';

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
			<div class="grow">
				<EventViewer {subject} />
			</div>
		</div>
	</div>
</div>
