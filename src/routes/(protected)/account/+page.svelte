<script lang="ts">
  import { signOut } from '$lib/utils/auth-client';

  const { data } = $props();
  const { user, session } = data;
</script>

<img src={user?.image} alt="" />

<h1>User Name from user: {user?.name}</h1>
<h2>User ID from session: {session?.userId}</h2>

<button onclick={signOut}>Sign out</button>
