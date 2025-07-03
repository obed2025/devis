import { browser } from "$app/environment";
import { m } from "$lib/paraglide/messages.js";
import { getEstimate } from "$lib/utilities/db";
import { error } from "@sveltejs/kit";

export const loadEstimates = async (id: number) => {
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

          return estimate;
        })()
      : null,
  };
};
