<script lang="ts">
  import Loading from "$lib/components/Loading.svelte";
  import PreviewEstimate from "$lib/components/PreviewEstimate.svelte";

  const { data } = $props();
  const { estimate, id } = data;
</script>

<svelte:head>
  <title>{estimate?.title}</title>
</svelte:head>

{#if !estimate}
  <Loading></Loading>
{:else}
  <PreviewEstimate {estimate} {id}></PreviewEstimate>
{/if}
