<script lang="ts">
	import { page } from '$app/state';
	import Estimation from '$lib/components/Estimation.svelte';
	import type { PageProps } from '../$types';
	import { get } from 'idb-keyval';

	const { data }: PageProps = $props();
	const searchParams = new URL(page.url).searchParams;
	const obj = Object.fromEntries(data.estimations || []);

	const estimations = Array.from(searchParams)
		.find((val) => val[0] === 'estimations')?.[1]
		.split(',')
		.map((val) => +val.trim())
		.filter((val) => val in obj);
</script>

{#if estimations?.length}
	<div class="btns">
		<button class="btn" onclick={() => print()}>
			<i class="fa-solid fa-print"></i>
			<span>Print</span>
		</button>
	</div>
{/if}

<svelte:head>
	<title>Devis - Many Estimations</title>
</svelte:head>

{#each estimations || [] as estimation}
	{#await get(estimation)}
		<p>Loading.......</p>
	{:then data}
		{#if data}
			<Estimation {data}></Estimation>
		{/if}
	{/await}
{/each}

<style>
	.btn {
		--color: #96e8d43d;

		@media print {
			display: none;
		}
	}
</style>
