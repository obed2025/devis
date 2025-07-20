<script lang="ts">
  import { signIn } from "$lib/auth-client";
</script>

<form>
  <h1>Sign in</h1>

  <hr />

  <button onclick={signIn} class="secondary outline">
    <img src="/icons8-google.svg" alt="" />
    <span>Continue with Google</span>
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
