<script lang="ts">
	import type { PageProps } from './$types';
	import cartEmpty from '$lib/assets/cart-empty.gif';
	import type { Estimation } from '$lib/types';
	import { slide } from 'svelte/transition';
	import { delMany } from 'idb-keyval';
	import { Modal, Content, Trigger } from 'sv-popup';

	const { data }: PageProps = $props();
	let selected: boolean[] = $state([]);
	let selectedEstimations = $derived(
		selected.map((val, i) => val && data.estimations?.[i][0]).filter(Boolean) as IDBValidKey[]
	);
	let selectAll = $state(false);
</script>

<svelte:head>
	<title>Devis</title>
</svelte:head>

{#if selectedEstimations.length}
	<div class="btns" transition:slide>
		<Modal basic small>
			<Content class="p-8">
				<p>Do you really want to delete them! This action is irreversible.</p>
				<button
					class="btn red"
					onclick={async () => {
						await delMany(selectedEstimations);
						document.location = '/';
					}}>Continue</button
				>
			</Content>
			<Trigger>
				<button class="btn red">
					<i class="fa-solid fa-trash"></i>
					<span>Delete</span>
				</button>
			</Trigger>
		</Modal>
		<button class="btn">
			<a href="/multiple?estimations={selectedEstimations.join(',')}">
				<i class="fa-solid fa-external-link"></i>
				<span>Open</span>
			</a>
		</button>
	</div>
{/if}

{#if data.estimations === null}
	<h3 class="loading">Loading....</h3>
{:else if !data.estimations?.length}
	<div class="empty">
		<img src={cartEmpty} alt="Empty Box" />
		<p>
			You have no estimations yet. <br />
			Read more <a href="/about">about</a> this project or,
			<a href="/new" data-sveltekit-preload-data="tap">create</a> a new estimation.
		</p>
	</div>
{:else}
	<label for="select-all">
		<input
			type="checkbox"
			id="select-all"
			bind:checked={selectAll}
			oninput={() => (selected = selected.map((_) => !selectAll))}
		/>
		<span>Select all</span>
	</label>

	<div class="estimations">
		{#each data.estimations as estimation, i}
			{@const data = estimation[1] as Estimation}
			<div>
				<input type="checkbox" bind:checked={selected[i]} />
				<h2><a href="/{estimation[0]}">{data.title || 'Untitled'}</a></h2>
				<h3>{data.scopeOfWork}</h3>
				<span>{new Date(estimation[0] as number).toLocaleDateString()}</span>
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

			input {
				zoom: 2;
				accent-color: brown;
				margin-left: 0;
			}
		}
	}

	h2 {
		word-wrap: break-word;
	}

	a {
		text-decoration: none;
		color: brown;
	}

	button {
		--color: #3c007814;

		&.red {
			--color: #d9b6b680;
		}

		a {
			color: CanvasText;
		}
	}

	label {
		margin-bottom: 1rem;
		display: block;
		display: flex;
		align-items: center;

		input {
			zoom: 1.5;
		}
	}
</style>
