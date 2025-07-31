<script lang="ts">
  import { signOut } from '$lib/utils/auth-client';

  const { data } = $props();
</script>

<div>
  <p>
    {data.user?.name}
  </p>

  <pre>
    {JSON.stringify(data.estimates, null, 2)}
  </pre>
  <button onclick={signOut}> Sign Out </button>
</div>

<form method="POST">
  <p>Do you want to add a random estimate?</p>
  <button>Add a random estimate</button>
</form>

<a href="/">Go home</a>
