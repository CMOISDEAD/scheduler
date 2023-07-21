<!-- Horario.svelte -->
<script lang="ts">
	import { getLayout } from '$lib/utils/GridGenerator';
	import { classes, hours, days } from '../data.json';

	let schedule: ScheduleType[] = [];

	classes.forEach((clase) => {
		clase.events.forEach((event) => {
			schedule.push({
				name: clase.name,
				duration: `${event.time.from} - ${event.time.to}`,
				day: event.day.charAt(0).toUpperCase() + event.day.slice(1),
				start: event.time.from,
				end: event.time.to
			});
		});
	});
</script>

<div class="grid-rows-[repeat(17, 1fr)] grid w-full border-collapse grid-cols-[80px_repeat(5,1fr)]">
	<div class="empty-cell" />
	{#each days as day}
		<div
			class="day-cell m-2 rounded-lg border border-neutral-800 bg-neutral-900/75 p-2 text-center font-bold"
		>
			{day}
		</div>
	{/each}

	{#each hours as hour}
		<div class="hour-cell bg-neutral-900 py-2 text-center font-bold text-neutral-400">
			{hour}
		</div>
		{#each days as day}
			{#if schedule.find((clase) => clase.day === day && clase.start === hour)}
				{#each schedule.filter((clase) => clase.day === day && clase.start === hour) as clase}
					<div
						class="mx-5 my-1 flex flex-col content-center items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/75 hover:cursor-pointer hover:border-neutral-700"
						style={getLayout(clase, days, hours)}
					>
						<h3 class="text-center text-xl font-bold text-rose-700">{clase.name}</h3>
						<p class="text-xs text-neutral-500">{clase.duration}</p>
					</div>
				{/each}
			{/if}
		{/each}
	{/each}
</div>

<style>
	.empty-cell {
		grid-column: 1;
		grid-row: 1;
	}

	.hour-cell {
		grid-column: 1;
	}

	.day-cell {
		grid-row: 1;
	}
</style>
