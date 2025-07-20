<script lang="ts">
  import { page } from '$app/state';

  const TITLE = 'Devis';
  const DESC = `Devis (estimate in French) is a free web tool for creating
    , editing, and exporting price estimations, 
    especially for construction projects.`;
  const { host, origin } = page.url;
  const imgURL = origin + '/open-graph.png';
</script>

<svelte:head>
  <!-- HTML Meta Tags -->
  <meta name="description" content={DESC} />

  <!-- Open Graph Meta Tags -->
  <meta property="og:url" content={origin} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={TITLE} />
  <meta property="og:description" content={DESC} />
  <meta property="og:image" content={imgURL} />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={host} />
  <meta property="twitter:url" content={origin} />
  <meta name="twitter:title" content={TITLE} />
  <meta name="twitter:description" content={DESC} />
  <meta name="twitter:image" content={imgURL} />
</svelte:head>
