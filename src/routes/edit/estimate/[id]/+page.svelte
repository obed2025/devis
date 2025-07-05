<script lang="ts">
  import { goto } from "$app/navigation";
  import EditAdditional from "$lib/components/EditAdditional.svelte";
  import EditRequired from "$lib/components/EditRequired.svelte";
  import Loading from "$lib/components/Loading.svelte";
  import { m } from "$lib/paraglide/messages.js";
  import { updateEstimate } from "$lib/utilities/db.js";
  import { globalEstimate } from "$lib/utilities/states.svelte.js";

  const { data } = $props();
  const estimate = data.estimate;

  if (estimate) {
    globalEstimate.data = estimate;
  }
</script>

<svelte:head>
  <title>{globalEstimate.title}</title>
</svelte:head>

{#if estimate === null}
  <Loading></Loading>
{:else}
  <button
    onclick={() => {
      updateEstimate(data.id, JSON.parse(JSON.stringify(globalEstimate.data)));
      goto(`/open/estimate/${data.id}`);
    }}
  >
    <i class="fa-solid fa-save"></i>
    <span>{m.save()}</span>
  </button>

  <EditRequired></EditRequired>
  <hr />
  <EditAdditional></EditAdditional>
{/if}

<style>
  button {
    margin-bottom: 1rem;
  }
</style>
