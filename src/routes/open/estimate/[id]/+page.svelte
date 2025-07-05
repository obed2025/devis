<script lang="ts">
  import Loading from "$lib/components/Loading.svelte";
  import PreviewEstimate from "$lib/components/PreviewEstimate.svelte";

  const { data } = $props();
  const { estimate, id } = data;
</script>

{#if !estimate}
  <Loading></Loading>
{:else}
  <PreviewEstimate {estimate} {id}></PreviewEstimate>
{/if}
