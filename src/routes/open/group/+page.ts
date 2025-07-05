import { browser } from "$app/environment";
import { getManyEstimates } from "$lib/utilities/db.js";
import { error } from "@sveltejs/kit";

export const load = async ({ url }) => {
  const ids = url.searchParams
    .get("estimates")
    ?.split(",")
    .map((val) => +val)
    .filter(Boolean);

  if (ids === undefined || !ids.length) {
    error(400, "Please provide estimates IDs!");
  }

  return {
    estimates: browser ? await getManyEstimates(ids) : null,
  };
};
