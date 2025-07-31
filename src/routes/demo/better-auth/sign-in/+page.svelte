<script>
  import { page } from '$app/state';
  import { signIn } from '$lib/utils/auth-client';
  const redirectURL = page.url.searchParams.get('redirect');
</script>

<h1>Sign in</h1>
<button onclick={async () => await signIn(redirectURL || '/')}
  >Continue with Google</button
>

<a href="/">Go home</a>
