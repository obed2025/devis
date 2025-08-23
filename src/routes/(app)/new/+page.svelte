<script lang="ts">
  import { m } from '$lib/paraglide/messages';
</script>

<svelte:head>
  <title>Devis - New</title>
</svelte:head>

<form method="POST">
  <label for="title">{m.title()}</label>
  <input type="text" id="title" name="title" placeholder={m.title()} required />

  <label for="scope-of-work">{m['scope-of-work']()}</label>
  <input
    type="text"
    id="scope-of-work"
    name="scope-of-work"
    placeholder={m['scope-of-work']()}
  />

  <input type="submit" value={m.continue()} />
</form>
