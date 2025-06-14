import type { PageLoad } from './$types';
import { entries } from 'idb-keyval';
import { browser } from '$app/environment';

export const load: PageLoad = async () => ({
	estimations: browser
		? await (async () => {
				const estimations = await entries();
				if (!estimations) return undefined;
				return estimations;
			})()
		: null
});
