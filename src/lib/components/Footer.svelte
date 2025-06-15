<script>
	import { page } from '$app/state';

	const year = new Date().getFullYear();
	const { origin } = page.url;
	const NAME = 'NIYOMUGISHA Obed';

	const range = year - 2025 ? `2025 - ${year}` : year;
</script>

<footer class="container">
	<p class="screen">
		Copyright &copy; by {NAME}
		{range} <br />
		All rights reserved.
	</p>

	<p class="print">
		Generated via
		<a href={origin}>{origin}</a>
	</p>
</footer>

<style>
	p {
		text-align: center;
	}

	.screen {
		@media print {
			display: none;
		}
	}

	.print {
		@media screen {
			display: none;
		}
	}
</style>
