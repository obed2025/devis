<script lang="ts">
	import { estimationStore } from '$lib/stores.svelte';
	import { COLUMNS } from '$lib/consts';
	import { currency } from '$lib/utils';
	import type { Expense, ExtraExpense } from '$lib/types';

	interface Props {
		expenses?: Expense[];
		extraExpenses?: ExtraExpense[];
		currency$?: string;
	}

	const { currency$, expenses, extraExpenses }: Props = $props();

	let total = $derived(
		(expenses || estimationStore.expenses).reduce((a, b) => a + (b.qty || 1) * (b.unitCost || 0), 0)
	);

	let grandTotal = $derived(
		total +
			((extraExpenses || estimationStore.extraExpenses)?.reduce((a, b) => a + (b.amount || 0), 0) ||
				0)
	);

	const currentCurrency = currency$ || estimationStore.currency || 'USD';
</script>

<table>
	<thead>
		<tr>
			{#each COLUMNS as column}
				<th>{column}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each expenses || estimationStore.expenses as expenses_, i}
			<tr>
				<td>{i + 1}</td>
				<td>{expenses_.desc}</td>
				<td>{expenses_.unit}</td>
				<td>{expenses_.qty?.toLocaleString()}</td>
				<td>
					{#if expenses_.qty}
						{currency(expenses_.unitCost || 0, currentCurrency)}
					{/if}
				</td>
				<td>{currency((expenses_.qty || 1) * (expenses_.unitCost || 0), currentCurrency)} </td>
			</tr>
		{/each}
	</tbody>
	<tfoot>
		{#if extraExpenses?.length || estimationStore.extraExpenses?.length}
			<tr>
				<td colspan="2">Sub Total</td>
				<td colspan="4">{currency(total, currentCurrency)}</td>
			</tr>
		{/if}
		{#each extraExpenses || estimationStore.extraExpenses || [] as expense}
			<tr>
				<td colspan="2">{expense.desc}</td>
				<td colspan="4">{currency(expense.amount || 0, currentCurrency)}</td>
			</tr>
		{/each}
		<tr>
			<th colspan="2">TOTAL</th>
			<th colspan="4">{currency(grandTotal, currentCurrency)}</th>
		</tr>
	</tfoot>
</table>

<style>
	thead th,
	tbody td {
		border: 1px solid CanvasText;
	}

	table {
		border-collapse: collapse;
	}

	td,
	th {
		padding: 0.5rem;
	}

	tr:has([colspan]) {
		& > *:last-child {
			text-align: end;
		}

		td {
			border: none;
		}

		th {
			text-align: inherit;
		}
	}

	@media print {
		tfoot {
			display: table-row-group;
		}
	}

	tfoot {
		border: 1px solid black;
	}
</style>
