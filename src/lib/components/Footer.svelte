<script>
	const year = new Date().getFullYear();
	const NAME = 'NIYOMUGISHA Obed';

	const range = year - 2025 ? `2025 - ${year}` : year;
</script>

<footer class="container">
	Copyright &copy; by {NAME}
	{range} <br />
	All rights reserved.
</footer>

<style>
	footer {
		text-align: center;

		@media print {
			display: none;
		}
	}
</style>
