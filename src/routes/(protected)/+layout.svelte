<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import { AUTH_URL } from '$lib/consts';
  import { authClient } from '$lib/utils/auth-client';
  const session = authClient.useSession();
  const { pathname } = page.url;

  $effect(() => {
    if (
      !$session.data &&
      !$session.isPending &&
      !$session.isRefetching &&
      pathname !== AUTH_URL
    ) {
      goto(`${AUTH_URL}?redirect=${pathname}`);
    }
  });

  const { children } = $props();
</script>

{@render children()}
