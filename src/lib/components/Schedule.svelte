<!-- Horario.svelte -->
<script lang="ts">
	import { getLayout, createSchedule } from '$lib/utils/GridGenerator';
	import { classes, hours, days } from '../data.json';

	const schedule: ScheduleType[] = createSchedule(classes);

	function addClass() {
		alert('work on progress');
	}
</script>

<div class="grid grid-cols-[79px_repeat(1,minmax(0,1fr))] gap-4">
	<div class="grid grid-cols-1 grid-rows-[repeat(17,minmax(0,80px))] gap-3">
		<button
			class="flex items-center justify-center rounded-full bg-rose-700 text-lg font-bold text-neutral-400 hover:bg-rose-800"
			on:click={addClass}
		>
			+
		</button>
		{#each hours as hour}
			<div
				class="flex items-center justify-center rounded-lg text-center font-bold text-neutral-400"
			>
				{hour}
			</div>
		{/each}
	</div>

	<div class="grid w-full border-collapse grid-cols-6 grid-rows-[repeat(17,minmax(0,80px))] gap-3">
		{#each days as day}
			<div
				class="sticky top-0 flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/75 p-2 text-center font-bold backdrop-blur-sm"
			>
				{day}
			</div>
		{/each}
		{#each hours as hour, i}
			{#each days as day}
				{#if schedule.find((clase) => clase.day === day && clase.start === hour)}
					{#each schedule.filter((clase) => clase.day === day && clase.start === hour) as clase}
						<div
							class="flex flex-col content-center items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/75 transition-colors hover:cursor-pointer hover:border-neutral-700"
							style={getLayout(clase, days, hours)}
						>
							<h3 class="text-center text-xl font-bold text-rose-700">{clase.name}</h3>
							<p class="text-xs text-neutral-500">{clase.duration}</p>
						</div>
					{/each}
				{:else}
					<div class="border-b border-b-neutral-800" />
				{/if}
			{/each}
		{/each}
	</div>
</div>
