import type { LayoutLoad } from './$types';
import { get } from 'idb-keyval';
import { browser } from '$app/environment';
import { error } from '@sveltejs/kit';
import { estimationStore } from '$lib/stores.svelte';
import type { Estimation } from '$lib/types';

export const load: LayoutLoad = async ({ params }) => ({
	estimation: browser
		? await (async () => {
				try {
					const estimation = (await get(+params.id)) as Estimation | undefined;
					if (!estimation) throw new Error();

					estimationStore.data = estimation;

					return estimation;
				} catch (err) {
					error(404, 'Error: Estimation not found');
				}
			})()
		: null
});
