<script lang="ts">
  import { goto } from "$app/navigation";
  import Loading from "$lib/components/Loading.svelte";
  import Table from "$lib/components/Table.svelte";
  import { m } from "$lib/paraglide/messages.js";

  const { data } = $props();
  const { estimate, id } = data;
</script>

{#if !estimate}
  <Loading></Loading>
{:else}
  {@const { title, scopeOfWork, expenses, extraExpenses, currency, note } =
    estimate}

  <!-- svelte-ignore a11y_no_redundant_roles -->
  <fieldset class="secondary">
    <button aria-label="Print" onclick={() => print()}>
      <i class="fa-solid fa-print"></i>
    </button>
    <button
      aria-label="Edit"
      class="outline secondary"
      onclick={() => goto(`/edit/estimate/${id}`)}
    >
      <i class="fa-solid fa-pen"></i>
    </button>
  </fieldset>

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
