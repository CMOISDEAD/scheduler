<script>
	import Book from '$lib/svg/Book.svelte';
	import Calendar from '$lib/svg/Calendar.svelte';
	import Setting from '$lib/svg/Setting.svelte';
</script>

<aside class="sticky top-0 flex h-screen flex-col justify-between gap-4 bg-neutral-900/75 p-3">
	<div class="flex flex-col items-center gap-2 text-neutral-500">
		<a href="/">
			<div class="rounded-lg p-1 transition-all hover:bg-neutral-800">
				<Calendar />
			</div>
		</a>
		<a href="/calendar">
			<div class="rounded-lg p-1 transition-all hover:bg-neutral-800">
				<Book />
			</div>
		</a>
	</div>
	<div class="flex flex-col items-center gap-4">
		<a href="https://github.com/CMOISDEAD" target="_blank">
			<img
				src="https://avatars.githubusercontent.com/u/51010598?v=4"
				alt="user"
				class="w-5 rounded-full"
			/>
		</a>
		<a href="/">
			<div class="rounded-lg p-1 transition-all hover:bg-neutral-800">
				<Setting />
			</div>
		</a>
	</div>
</aside>
