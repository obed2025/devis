<script lang="ts">
	import { page } from '$app/state';

	const { status, error } = page;
</script>

<svelte:head>
	<title>{error?.message}</title>
</svelte:head>

<div class="not-found">
	<h1>{status}</h1>
	<p>{error?.message}</p>
	<a href="/">Go back home!</a>
</div>

<style>
	h1 {
		color: red;
	}

	a,
	h1 {
		text-align: center;
		width: 100%;
		display: block;
	}
</style>
