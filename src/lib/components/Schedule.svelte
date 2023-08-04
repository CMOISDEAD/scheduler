<script lang="ts">
	import { data } from '../../store/store';
	import { getLayout, createSchedule } from '$lib/utils/GridGenerator';
	import { getDay } from '$lib/utils/date';
	let schedule: ScheduleType[] = createSchedule($data.classes);
	const currentDay = getDay();
</script>

<div class="grid grid-cols-[79px_repeat(1,minmax(0,1fr))] gap-4">
	<div class="grid grid-cols-1 grid-rows-[repeat(17,minmax(0,80px))] gap-3">
		<div
			class="flex items-center justify-center rounded-full bg-rose-700 text-lg font-bold text-neutral-200"
		>
			{$data.classes.length}
		</div>
		{#each $data.hours as hour}
			<div
				class="flex items-center justify-center border-b border-neutral-800 text-center font-bold text-neutral-400"
			>
				{hour}
			</div>
		{/each}
	</div>

	<div class="grid w-full border-collapse grid-cols-6 grid-rows-[repeat(17,minmax(0,80px))] gap-3">
		{#each $data.days as day, i}
			<div
				class={`sticky top-0 flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/75 p-2 text-center font-bold backdrop-blur-sm ${
					currentDay - 1 === i && 'bg-rose-700/75'
				}`}
			>
				{day}
			</div>
		{/each}
		{#each $data.hours as hour, i}
			{#each $data.days as day}
				{#if schedule.find((clase) => clase.day === day && clase.start === hour)}
					{#each schedule.filter((clase) => clase.day === day && clase.start === hour) as clase}
						<div
							class="flex flex-col content-center items-center justify-center truncate rounded-lg border border-neutral-800 bg-neutral-900/75 p-2 transition-colors hover:cursor-pointer hover:border-neutral-700"
							style={getLayout(clase, $data.days, $data.hours)}
						>
							<h3 class="text-center text-xl font-bold text-rose-700">{clase.name}</h3>
							<p class="text-xs text-neutral-500">{clase.duration}</p>
						</div>
					{/each}
				{/if}
			{/each}
		{/each}
	</div>
</div>
