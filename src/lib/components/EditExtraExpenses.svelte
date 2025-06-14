<script lang="ts">
	import { estimationStore } from '$lib/stores.svelte';

	if (!estimationStore.extraExpenses) estimationStore.extraExpenses = [];

	function onclick() {
		estimationStore.extraExpenses?.push({
			desc: '',
			amount: undefined
		});
	}

	function ondelete(index: number) {
		estimationStore.extraExpenses?.splice(index, 1);
	}
</script>

{#each estimationStore.extraExpenses || [] as expense, i}
	<fieldset>
		<input type="text" bind:value={expense.desc} placeholder="Description" />
		<input type="number" bind:value={expense.amount} placeholder="Amount" />
		<button aria-label="Delete" onclick={() => ondelete(i)}>
			<i class="fa-solid fa-trash"></i>
		</button>
	</fieldset>
{/each}

<button {onclick} class="cta">
	<i class="fa-solid fa-plus-circle"></i>
	<span>Add an extra-expense</span>
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
