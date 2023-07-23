<script lang="ts">
	export let value = '';
	export let placeholder = '';
	export let list: any[] = [];
</script>

<select bind:value class="rounded-lg border border-neutral-700 bg-neutral-800 p-2">
	<option value="" disabled selected={true} hidden>{placeholder}</option>
	{#each list as item}
		<option value={item}>{item}</option>
	{/each}
</select>
