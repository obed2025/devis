<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { update } from 'idb-keyval';
	import { estimationStore } from '$lib/stores.svelte';
	import { data } from 'currency-codes';
	import EditExpenses from '$lib/components/EditExpenses.svelte';
	import EditExtraExpenses from '$lib/components/EditExtraExpenses.svelte';

	const { id } = page.params;
	const codes_all = data
		.map((val) => ({
			code: val.code,
			currency: val.currency,
			countries: val.countries
		}))
		.sort((a, b) => a.currency.localeCompare(b.currency));

	function onclick() {
		update(+id, () => ({
			title: estimationStore.title,
			scopeOfWork: estimationStore.scopeOfWork,
			note: estimationStore.note,
			currency: estimationStore.currency,
			expenses: JSON.parse(JSON.stringify(estimationStore.expenses ?? [])),
			extraExpenses: JSON.parse(JSON.stringify(estimationStore.extraExpenses ?? []))
		}));

		goto('../' + id);
	}

	let currencySearchInput = $state('');
	let codes = $derived(
		codes_all.filter((val) => {
			const lowerInput = currencySearchInput.toLowerCase();
			const lowerCurrency = val.currency.toLowerCase();

			return lowerCurrency.includes(lowerInput);
		})
	);
</script>

<svelte:head>
	<title>{estimationStore.title}</title>
</svelte:head>

<div class="btns">
	<button class="btn yellow" {onclick}>
		<i class="fa-solid fa-file"></i>
		<span>Save</span>
	</button>
</div>

<i>Title</i>
<h1 bind:innerText={estimationStore.title} contenteditable></h1>
<i>Scope of work</i>
<h2 bind:innerText={estimationStore.scopeOfWork} contenteditable></h2>

<i>note</i>
<p bind:innerText={estimationStore.note} contenteditable></p>

<i>currency</i> <br />
<div class="select-currency">
	<input type="text" placeholder="search" bind:value={currencySearchInput} />
	<select name="currency" id="currency" bind:value={estimationStore.currency}>
		{#each codes as { code, currency }, i}
			<option value={code} selected={i === 0}>{currency} - {code}</option>
		{/each}
	</select>
</div>

<EditExpenses></EditExpenses>
<EditExtraExpenses></EditExtraExpenses>

<style>
	:is(h1, h2, p) {
		border: 1px solid CanvasText;
	}

	.yellow {
		--color: #ffff0054;
	}

	select {
		padding: 0.3rem;
		width: fit-content;
		max-width: 100%;
	}

	i + p {
		margin-top: 0;
	}

	.select-currency {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;

		select:empty {
			display: none;
		}
	}
</style>
