<script lang="ts">
  import { goto } from "$app/navigation";
  import { m } from "$lib/paraglide/messages";
  import { createEstimate } from "$lib/utilities/db";

  let title = $state("");
  let scopeOfWork = $state("");

  async function onsubmit(e: Event) {
    e.preventDefault();

    const id = await createEstimate({ title, scopeOfWork, expenses: [] });
    goto(`/edit/estimate/${id}`);
  }
</script>

<form {onsubmit}>
  <label for="title">{m.title()}</label>
  <input
    type="text"
    id="title"
    placeholder={m.title()}
    required
    bind:value={title}
  />

  <label for="scope-of-work">{m["scope-of-work"]()}</label>
  <input
    type="text"
    id="scope-of-work"
    placeholder={m["scope-of-work"]()}
    required
    bind:value={scopeOfWork}
  />

  <input type="submit" value={m.continue()} />
</form>
