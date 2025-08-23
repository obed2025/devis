<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import NotFound from '$lib/components/NotFound.svelte';
  import { m } from '$lib/paraglide/messages';
  import { selectedEstimates } from '$lib/utilities/states.svelte';
  import type { Estimate } from '$lib/utilities/types';
  import { slide } from 'svelte/transition';

  const ids = $derived(selectedEstimates.ids);
  const { data } = $props();
  const { estimates } = data;
</script>

<svelte:head>
  <title>Devis</title>
</svelte:head>

{#if !estimates || estimates.length === 0}
  <NotFound>
    <p>
      {m['empty-db']()}
      <a href="/new">{m['add-a-new-project']()}</a>
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
              ? selectedEstimates.addMany(estimates.map((val) => val._id))
              : selectedEstimates.clear();
          }
        }
      />
      {m['select-all']()}
    </label>
  {/if}
  <div>
    {@render Estimates([...estimates].reverse())}
  </div>
{/if}

{#snippet Estimates(estimates: Estimate[])}
  {#each estimates as { _id, title, scopeOfWork, createdAt }}
    <Card {title} {scopeOfWork} {_id} {createdAt}></Card>
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
