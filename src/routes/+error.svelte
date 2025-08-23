<script lang="ts">
  import { page } from '$app/state';
  import { signIn } from '$lib/auth-client';
  import { m } from '$lib/paraglide/messages';
  import google from '$lib/assets/icons8-google.svg';

  const message = page.error?.message;
</script>

<svelte:head>
  <title>Devis - {message}</title>
</svelte:head>

{#if message === 'Un Authorized'}
  <div class="sign-in">
    <form>
      <h1>{m['auth.sign-in']()}</h1>

      <hr />

      <button
        onclick={() => signIn(page.url.pathname)}
        class="secondary outline"
      >
        <img src={google} alt="" />
        <span>{m['auth.continue-with']()} Google</span>
      </button>
    </form>
  </div>
{:else if message === 'Not Found'}
  <div class="not-found">
    <h1>404</h1>
    <p>{page.url}</p>
    <p>Page Not found. Go back <a data-sveltekit-reload href="/">home</a></p>
  </div>
{:else}
  <div class="else">
    <h1>{message}</h1>
  </div>
{/if}

<style>
  .not-found {
    padding: 1rem;

    & * {
      text-align: center;
    }
  }

  .sign-in,
  .else {
    min-height: 100dvh;
    display: grid;
    place-items: center;
  }

  form {
    margin-inline: auto;
    width: fit-content;
    border: 1px solid var(--pico-color);
    padding: 1rem;
    border-radius: 1rem;
  }

  button {
    display: flex;
    align-items: center;
  }

  img {
    width: 2.5rem;
    margin-right: 0.75rem;
  }
</style>
