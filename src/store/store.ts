import { writable } from 'svelte/store';
import default_data from '../lib/data.json';

export const data = writable(default_data);
export const loaded = writable(false);
