import { loadEstimates } from "$lib/utilities/load.js";

export const load = async ({ params }) => loadEstimates(+params.id);
