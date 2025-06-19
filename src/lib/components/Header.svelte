<script lang="ts">
	import { page } from '$app/state';
	import type { Link } from '$lib/types';
	import { MENU } from '../consts';
</script>

<header class="container">
	<h1>
		<a
			href="/"
			translate="no"
			onclick={(e) => {
				e.preventDefault();
				document.location = '/';
			}}>Devis</a
		>
	</h1>

	{#if !page.url.toString().includes('/edit')}
		<nav>
			<ul>
				{#each MENU as link}
					{@render ListItem(link)}
				{/each}
			</ul>
		</nav>
	{/if}
</header>

{#snippet ListItem({ href, text, icon }: Link)}
	<li>
		<a {href} data-sveltekit-preload-data={href === '/new' ? 'tap' : 'hover'}>
			<i class="fa-solid fa-{icon}"></i>
			<span>{text}</span>
		</a>
	</li>
{/snippet}

<style>
	header,
	ul {
		display: flex;
	}

	header {
		align-items: center;
		position: sticky;
		top: 0;
		background-color: Canvas;
		justify-content: space-between;
		gap: 0.5rem;
		flex-wrap: wrap;
		z-index: 10;

		@media print {
			display: none;
		}
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		gap: 1rem;
	}

	h1 {
		margin: 0;
	}

	a {
		text-decoration: none;
		color: black;

		&:has(i:hover, :hover) span {
			text-decoration: underline;
		}
	}
</style>
