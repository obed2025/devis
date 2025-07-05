<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import Loading from "$lib/components/Loading.svelte";
  import NotFound from "$lib/components/NotFound.svelte";
  import { m } from "$lib/paraglide/messages";
  import { getAllEstimates } from "$lib/utilities/db";
  import { selectedEstimates } from "$lib/utilities/states.svelte";
  import type { Estimate } from "$lib/utilities/types";
  import { slide } from "svelte/transition";

  const ids = $derived(selectedEstimates.ids);
</script>

{#await getAllEstimates()}
  <Loading></Loading>
{:then estimates}
  {#if !estimates.length}
    <NotFound>
      <p>
        {m["empty-db"]()}
        <a href="/new/estimate">{m["add-a-new-project"]()}</a>
      </p>
    </NotFound>
  {:else}
    {#if ids.length}
      <label transition:slide>
        <input
          type="checkbox"
          bind:checked={
            () => ids.length === estimates.length,
            (value) => {
              value
                ? selectedEstimates.addMany(estimates.map((val) => val[0]))
                : selectedEstimates.clear();
            }
          }
        />
        {m["select-all"]()}
      </label>
    {/if}
    <div>
      {@render Estimates(estimates)}
    </div>
  {/if}
{/await}

{#snippet Estimates(estimates: [number, Estimate][])}
  {#each estimates as [id, estimate]}
    {@const { title, scopeOfWork } = estimate}

    <Card {title} {scopeOfWork} {id} single={estimates.length === 1}></Card>
  {/each}
{/snippet}

<style>
  div {
    display: grid;
    --min: 250px;
    grid-template-columns: repeat(auto-fill, minmax(var(--min), 1fr));
    gap: 1rem;

    @media (width >= 700px) {
      --min: 300px;
    }

    @media (width >= 1000px) {
      --min: 350px;
    }
  }

  p {
    text-align: center;
  }

  label {
    padding: 0.5rem;
  }
</style>
