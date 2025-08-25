import { loadEstimate } from '$lib/utilities/load';

export const load = async ({ params }) => loadEstimate(params.id);
