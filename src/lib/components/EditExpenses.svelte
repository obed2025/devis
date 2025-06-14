<script lang="ts">
	import { estimationStore } from '$lib/stores.svelte';

	if (!estimationStore.expenses) estimationStore.expenses = [];

	function onclick() {
		estimationStore.expenses.push({
			desc: '',
			unitCost: undefined,
			qty: undefined,
			unit: ''
		});
	}

	function ondelete(index: number) {
		estimationStore.expenses.splice(index, 1);
	}
</script>

{#each estimationStore.expenses as expense, i}
	<fieldset>
		<input type="text" bind:value={expense.desc} placeholder="Description" />
		<input type="text" bind:value={expense.unit} placeholder="Unit" />
		<input type="number" bind:value={expense.qty} placeholder="Quantity" />
		<input type="number" bind:value={expense.unitCost} placeholder="Unit Cost" />
		<button aria-label="Delete" onclick={() => ondelete(i)}>
			<i class="fa-solid fa-trash"></i>
		</button>
	</fieldset>
{/each}

<button {onclick} class="cta">
	<i class="fa-solid fa-plus-circle"></i>
	<span>Add an expense</span>
</button>

<style>
	fieldset {
		margin-block: 0.5rem;
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;

		input {
			flex-grow: 1;
		}
	}
</style>
