<script lang="ts">
	import { estimationStore } from '$lib/stores.svelte';
	import type { Estimation } from '$lib/types';
	import Expenses from './Expenses.svelte';

	const { data }: { data: Estimation } = $props();
	const { title, scopeOfWork, note } = data;
</script>

<h1>{title}</h1>
<h2>{scopeOfWork}</h2>
<p>{note}</p>

{#if estimationStore.expenses}
	<Expenses></Expenses>
{/if}

<style>
	h1 {
		word-wrap: break-word;
	}
</style>
