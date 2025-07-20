<script lang="ts">
  import { signIn } from "$lib/auth-client";
  import { m } from "$lib/paraglide/messages";
</script>

<svelte:head>
  <title>{m["auth.sign-in"]()}</title>
</svelte:head>

<form>
  <h1>{m["auth.sign-in"]()}</h1>

  <hr />

  <button onclick={signIn} class="secondary outline">
    <img src="/icons8-google.svg" alt="" />
    <span>{m["auth.continue-with"]()} Google</span>
  </button>
</form>

<style>
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
