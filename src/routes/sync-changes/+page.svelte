<script lang="ts">
  import { goto } from "$app/navigation";
  import Loading from "$lib/components/Loading.svelte";
  import { getAllEstimates } from "$lib/utilities/db";
  import { setMany } from "idb-keyval";
  import { onMount } from "svelte";

  onMount(async () => {
    const estimates = await getAllEstimates();
    const deleted = JSON.parse(localStorage.getItem("deleted") ?? "[]");

    const res = await fetch("/api/sync-changes", {
      body: JSON.stringify({ estimates, deleted }),
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const updatedEstimates = await res.json();

    await setMany(updatedEstimates);
    localStorage.removeItem("deleted");

    goto("/");
  });
</script>

<Loading></Loading>
