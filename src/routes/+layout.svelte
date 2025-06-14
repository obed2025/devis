<script lang="ts">
	import '@fontsource-variable/inter';
	import '$lib/main.css';
	import '@fortawesome/fontawesome-free/css/all.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { OPEN_GRAPH } from '$lib/consts';
	import { page } from '$app/state';

	const { children } = $props();
	const { title, desc } = OPEN_GRAPH;

	const url = page.url.toString();
	const domain = new URL(url).host;
	const img = new URL('/og.png', url).toString();
</script>

<svelte:head>
	<meta name="description" content={desc} />

	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:image" content={img} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={domain} />
	<meta property="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={desc} />
	<meta name="twitter:image" content={img} />
</svelte:head>

<Header></Header>

<main class="container">
	{@render children()}
</main>

<Footer></Footer>
