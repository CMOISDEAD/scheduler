<script>
	// @ts-nocheck
	import { data } from '../../store/store';

	export let setSubject;
	let newSubject = {
		name: '',
		events: []
	};

	function handleSelect(event) {
		const name = event.target.innerText;
		const value = $data.classes.find((item) => item.name === name);
		setSubject(value);
	}

	function handleAdd() {
		$data.classes = [...$data.classes, newSubject];
		window.localStorage.setItem('data', JSON.stringify($data));
		newSubject = {
			name: '',
			events: []
		};
	}

	function handleDelete(event) {
		const name = event.target.attributes.name.value;
		const newSubjects = $data.classes.filter((item) => item.name !== name);
		$data.classes = newSubjects;
		window.localStorage.setItem('data', JSON.stringify($data));
		setSubject({ name: '', events: [] });
	}
</script>

<div class="flex flex-col justify-between gap-4 overflow-y-auto rounded-lg bg-neutral-900 p-3">
	<ul>
		<li><h3 class="font-bold text-rose-700">Subjects</h3></li>
		{#each $data.classes as subject}
			<li class="my-1 flex content-center items-center justify-between gap-4">
				<button
					class="w-5/6 truncate rounded-lg p-2 text-start text-neutral-400 hover:bg-neutral-500/20 hover:text-neutral-200"
					on:click={handleSelect}>{subject.name}</button
				>
				<button
					class="w-1/6 rounded-lg border border-rose-700 p-2 font-bold transition-colors hover:bg-rose-800"
					name={subject.name}
					on:click={handleDelete}>&times;</button
				>
			</li>
		{/each}
	</ul>
	<form class="my-1 flex flex-col gap-4">
		<input
			type="text"
			class="w-full rounded-lg border border-neutral-700 bg-neutral-800 p-2 text-white"
			placeholder="new subject name"
			bind:value={newSubject.name}
		/>
		<button
			class="w-full rounded-lg border border-green-600 p-2 text-neutral-300 transition-colors hover:bg-green-700 hover:text-neutral-200 disabled:cursor-not-allowed disabled:border-slate-300 disabled:text-slate-300 disabled:hover:bg-inherit"
			on:click={handleAdd}
			disabled={!newSubject.name}>Add new</button
		>
	</form>
</div>
