<script lang="ts">
  import Loading from "$lib/components/Loading.svelte";
  import NotFound from "$lib/components/NotFound.svelte";
  import PreviewEstimate from "$lib/components/PreviewEstimate.svelte";

  const { data } = $props();
  const { estimates } = data;
</script>

{#if estimates === null}
  <Loading></Loading>
{:else if !estimates.length}
  <div class="not-found">
    <span>4</span>
    <NotFound></NotFound>
    <span>4</span>
  </div>
{:else}
  <button aria-label="Print" onclick={() => print()}>
    <i class="fa-solid fa-print"></i>
  </button>

  <div class="grp">
    {#each estimates as [id, estimate]}
      <div>
        <PreviewEstimate {estimate} {id} group></PreviewEstimate>
      </div>
    {/each}
  </div>
{/if}

<style>
  .not-found {
    display: flex;
    font-size: 5rem;
    font-weight: 700;
  }

  .grp {
    display: grid;
    gap: 2rem;
  }

  button {
    margin-bottom: 1rem;

    @media print {
      display: none;
    }
  }
</style>
