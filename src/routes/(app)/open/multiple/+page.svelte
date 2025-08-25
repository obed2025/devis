<script lang="ts">
  import type { Estimate } from '$lib/utilities/types';
  import PreviewEstimate from '$lib/components/PreviewEstimate.svelte';

  const { data } = $props();
  const estimates = data.estimates as Estimate[];
</script>

<svelte:head>
  <title>{estimates[0].title}</title>
</svelte:head>

{#each estimates as estimate}
  <PreviewEstimate {estimate} multiple></PreviewEstimate>
{/each}
