// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface ScheduleType {
		name: string;
		duration: string;
		day: string;
		start: string;
		end: string;
	}
}

export {};
