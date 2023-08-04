<script>
	// @ts-nocheck
	import { data } from '../../store/store';
	import Select from './Select.svelte';

	export let subject;
	let event = {
		day: '',
		time: {
			from: '',
			to: ''
		}
	};

	function handleAdd() {
		const current = $data.classes.find((item) => item.name === subject.name);
		current.events = [...current.events, event];
		window.localStorage.setItem('data', JSON.stringify($data));
		event = {
			day: '',
			time: {
				from: '',
				to: ''
			}
		};
		subject = subject;
	}

	function handleDelete(assignature) {
		const newEvents = $data.classes
			.find((item) => item.name === subject.name)
			.events.filter((item) => item !== assignature);
		$data.classes.find((item) => item.name === subject.name).events = newEvents;
		window.localStorage.setItem('data', JSON.stringify($data));
		subject = subject;
	}
</script>

<div class="h-[76.5vh]">
	<div class="my-1 inline-flex gap-4">
		<h3 class="font-bold text-rose-700">Subject Name:</h3>
		<p>{subject.name || 'select one subject'}</p>
	</div>
	<div class="flex gap-4">
		<Select bind:value={event.day} placeholder="select day" list={$data.days} />
		<Select bind:value={event.time.from} placeholder="select start hour" list={$data.hours} />
		<Select bind:value={event.time.to} placeholder="select end hour" list={$data.hours} />
		<button
			class="rounded-lg border border-green-600 px-2 py-1 text-neutral-300 transition-colors hover:bg-green-600 hover:text-neutral-200 disabled:cursor-not-allowed disabled:border-slate-300 disabled:text-slate-300 disabled:hover:bg-inherit"
			disabled={!subject.name || !event.time.from || !event.time.to}
			on:click={handleAdd}
		>
			add event
		</button>
	</div>

	<div class="mt-4 h-full overflow-y-auto rounded-lg bg-neutral-900 p-4">
		<ul>
			{#each subject.events as assignature}
				<li>
					<div
						class="my-2 flex justify-between gap-4 rounded-lg border border-neutral-700 bg-neutral-800/40 p-2"
					>
						<div class="grow">
							<h3 class="text-lg font-bold text-rose-700">{subject.name}</h3>
							<p class="text-sm text-neutral-500">
								{assignature.day}
								<span class="text-xs">{assignature.time.from} - {assignature.time.to}</span>
							</p>
						</div>
						<button
							class="w-12 rounded-lg border border-rose-700 p-2 font-bold transition-colors hover:bg-rose-800"
							on:click={() => handleDelete(assignature)}>&times;</button
						>
					</div>
				</li>
			{:else}
				<p>no data</p>
			{/each}
		</ul>
	</div>
</div>
