import { redirect } from '@sveltejs/kit';
import { browser } from '$app/environment';

import type { Estimation } from '$lib/types';
import { set } from 'idb-keyval';

export function load() {
	if (browser) {
		const id = Date.now();
		const title = '';
		const scopeOfWork = '';

		set(id, { title, scopeOfWork, expenses: [] } satisfies Estimation);
		redirect(303, `/${id}/edit`);
	}
}
