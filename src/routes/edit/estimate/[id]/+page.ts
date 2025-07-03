import { browser } from "$app/environment";
import { m } from "$lib/paraglide/messages.js";
import { getEstimate } from "$lib/utilities/db";
import { globalEstimate } from "$lib/utilities/states.svelte.js";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const id = +params.id;

  if (isNaN(id)) {
    error(403, m["invalid-id"]());
  }

  return {
    id,
    estimate: browser
      ? await (async () => {
          const estimate = await getEstimate(id);

          if (estimate === undefined) {
            error(404, "Estimate not found");
          }

          globalEstimate.data = estimate;
          return estimate;
        })()
      : null,
  };
};
