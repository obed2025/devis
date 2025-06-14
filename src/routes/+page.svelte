<script lang="ts">
	import type { PageProps } from './$types';
	import cartEmpty from '$lib/assets/cart-empty.gif';
	import type { Estimation } from '$lib/types';

	const { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Devis</title>
</svelte:head>

{#if data.estimations === null}
	<h3 class="loading">Loading....</h3>
{:else if !data.estimations?.length}
	<div class="empty">
		<img src={cartEmpty} alt="Empty Box" />
		<p>You have no estimations yet.</p>
	</div>
{:else}
	<div class="estimations">
		{#each data.estimations as estimation}
			{@const data = estimation[1] as Estimation}
			<div>
				<h2><a href="/{estimation[0]}">{data.title}</a></h2>
				<h3>{data.scopeOfWork}</h3>
			</div>
		{/each}
	</div>
{/if}

<style>
	.estimations {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1rem;

		div {
			background-color: whitesmoke;
			padding: 0.25rem 0.75rem;
			border-radius: 0.35rem;
			border: 1px solid CanvasText;
		}
	}

	h2 {
		word-wrap: break-word;
	}

	a {
		text-decoration: none;
		color: brown;
	}
</style>
