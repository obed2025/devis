<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Estimation } from '$lib/types';
	import { set } from 'idb-keyval';

	const id = Date.now();
	let title = $state('');
	let scopeOfWork = $state('');

	function onsubmit(e: SubmitEvent) {
		e.preventDefault();

		const form = e.target as HTMLFormElement;
		set(id, { title, scopeOfWork, expenses: [] } satisfies Estimation);
		goto(new URL(form.action).pathname);
	}
</script>

<svelte:head>
	<title>Devis - New Estimation</title>
</svelte:head>

<form action="/{id}/edit" {onsubmit}>
	<label for="title">Title</label>
	<input type="text" name="title" bind:value={title} id="title" required />
	<label for="scope-of-work">Scope of work</label>
	<input type="text" name="scope-of-work" bind:value={scopeOfWork} id="scope-of-work" />
	<button>Submit</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
</style>
