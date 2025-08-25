<script lang="ts">
  import { goto } from '$app/navigation';
  import type { Estimate } from '$lib/utilities/types';
  import Table from './Table.svelte';
  import { m } from '$lib/paraglide/messages';

  const { estimate, multiple }: { estimate: Estimate; multiple?: boolean } =
    $props();
  const { _id, title, scopeOfWork, expenses, extraExpenses, currency, note } =
    estimate;
</script>

{#if !multiple}
  <fieldset class="secondary">
    <button aria-label="Print" onclick={() => print()}>
      <i class="fa-solid fa-print"></i>
    </button>
    <button
      aria-label="Edit"
      class="outline secondary"
      onclick={() => goto(`/edit/${_id}`)}
    >
      <i class="fa-solid fa-pen"></i>
    </button>
  </fieldset>
{/if}

<h1>{title}</h1>
<h2>{scopeOfWork}</h2>

<div class="overflow-auto">
  <Table {expenses} {extraExpenses} {currency}></Table>
</div>

{#if note?.length}
  <div class="note">
    <u>⚠️ {m.note()}</u>
    <p>{note}</p>
  </div>
{/if}

<style>
  .note {
    margin-block: 1rem;
    border: 1px solid var(--pico-primary);
    border-left-width: 4px;
    padding-inline: 0.5rem;
    padding-top: 0.5rem;
    border-radius: 0.5rem;
    min-width: 50%;
    width: fit-content;
  }

  u {
    text-underline-offset: 0.25rem;
  }

  @media print {
    fieldset {
      display: none;
    }

    .overflow-auto {
      overflow: visible;
    }

    h1,
    h2 {
      color: black;
    }
  }
</style>
