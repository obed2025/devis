<script lang="ts">
  import { page } from '$app/state';
  import { signIn } from '$lib/utils/auth-client';
</script>

<h1>Continue with</h1>
<button
  onclick={async () => {
    await signIn(page.url.searchParams.get('redirect') ?? undefined);
  }}
>
  Google
</button>
