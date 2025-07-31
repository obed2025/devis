<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import { PUBLIC_URLS } from '$lib/consts';
  import { authClient } from '$lib/utils/auth-client';
  const session = authClient.useSession();

  $effect(() => {
    if (
      !$session.data &&
      !$session.isPending &&
      !$session.isRefetching &&
      !PUBLIC_URLS.includes(page.url.pathname)
    ) {
      goto(PUBLIC_URLS[0]);
    }
  });

  const { children } = $props();
</script>

{@render children()}
