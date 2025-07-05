<script lang="ts">
  import Loading from "$lib/components/Loading.svelte";
  import NotFound from "$lib/components/NotFound.svelte";
  import PreviewEstimate from "$lib/components/PreviewEstimate.svelte";
  import { m } from "$lib/paraglide/messages.js";
  import { slide } from "svelte/transition";

  const { data } = $props();
  const { estimates } = data;

  let title = $state(m.title());
  let showTitle = $state(true);
</script>

<svelte:head>
  <title>{showTitle ? title : "Devis"}</title>
</svelte:head>

{#if estimates === null}
  <Loading></Loading>
{:else if !estimates.length}
  <div class="not-found">
    <span>4</span>
    <NotFound></NotFound>
    <span>4</span>
  </div>
{:else}
  {#if showTitle}
    <h1 bind:innerText={title} contenteditable transition:slide></h1>
  {/if}

  <button aria-label="Print" onclick={() => print()}>
    <i class="fa-solid fa-print"></i>
  </button>
  <label>
    <input
      name="show-title"
      type="checkbox"
      role="switch"
      bind:checked={showTitle}
    />
    {m["show-title"]()}
  </label>

  {#each estimates as [id, estimate]}
    <div class="estimate">
      <PreviewEstimate {estimate} {id} group></PreviewEstimate>
    </div>
  {/each}
{/if}

<style>
  .not-found {
    display: flex;
    font-size: 5rem;
    font-weight: 700;
  }

  .estimate:not(:last-child) {
    margin-bottom: 3rem;
  }

  button {
    margin-bottom: 1rem;

    @media print {
      display: none;
    }
  }

  h1 {
    text-decoration: underline;
  }

  @media print {
    label {
      display: none;
    }

    h1 {
      color: black;
      margin-top: 0.5rem;
      text-align: center;
      width: 100vw;
    }
  }
</style>
