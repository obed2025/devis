<script lang="ts">
	import '@fontsource-variable/inter';
	import '$lib/main.css';
	import '@fortawesome/fontawesome-free/css/all.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const { children } = $props();
</script>

<Header></Header>

<main class="container">
	{@render children()}
</main>

<Footer></Footer>
