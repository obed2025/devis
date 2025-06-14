<script lang="ts">
	import Estimation from '$lib/components/Estimation.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { del } from 'idb-keyval';
	import { estimationStore } from '$lib/stores.svelte';

	function ondelete() {
		if (confirm('Do you really want to delete this estimation!\nThis action is irreversible.')) {
			del(+page.params.id);
			goto('../');
		}
	}
</script>

<svelte:head>
	<title>{estimationStore.title}</title>
</svelte:head>

<div class="btns">
	<button class="btn red" onclick={ondelete}>
		<i class="fa-solid fa-trash"></i>
		<span>Delete</span>
	</button>

	<button class="btn blue" onclick={() => print()}>
		<i class="fa-solid fa-print"></i>
		<span>Print</span>
	</button>

	<button class="btn green" onclick={() => goto(page.params.id + '/edit')}>
		<i class="fa-solid fa-pen"></i>
		<span>Edit</span>
	</button>
</div>

<Estimation data={estimationStore.data}></Estimation>

<style>
	@media print {
		button {
			display: none;
		}
	}

	.red {
		--color: #ff00002b;
	}

	.green {
		--color: #00800036;
	}

	.blue {
		--color: #0000ff4f;
	}
</style>
