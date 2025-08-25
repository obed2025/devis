<script lang="ts">
  import PreviewEstimate from '$lib/components/PreviewEstimate.svelte';

  const { data } = $props();
  const { estimate } = data;
</script>

<svelte:head>
  <title>{estimate.title}</title>
</svelte:head>

<PreviewEstimate {estimate}></PreviewEstimate>
