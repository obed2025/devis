<script lang="ts">
  import { signIn } from "$lib/auth-client";
</script>

<form>
  <h1>Sign in</h1>

  <hr />

  <button onclick={signIn} class="secondary outline">
    <i class="fa-brands fa-google"></i>
    Continue with Google
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

  i {
    color: var(--pico-primary);
    font-weight: bold;
    margin-right: 0.75rem;
  }
</style>
