import { dev } from '$app/environment';
import { injectAnalytics } from '@vercel/analytics/sveltekit';

import type { LayoutLoad } from './$types';
import { entries } from 'idb-keyval';
import { browser } from '$app/environment';
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

injectSpeedInsights();
injectAnalytics({ mode: dev ? 'development' : 'production' });

export const load: LayoutLoad = async () => ({
	estimations: browser
		? await (async () => {
				const estimations = await entries();
				if (!estimations) return undefined;
				return estimations;
			})()
		: null
});
