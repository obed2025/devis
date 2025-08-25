<script lang="ts">
  import generic from '$lib/assets/OIP-3084535858.jpeg';
  import { signOut, signOutAllDevices } from '$lib/auth-client';
  import { m } from '$lib/paraglide/messages.js';
  const { data } = $props();

  let image = $state(data.userImage);
  let busy1 = $state(false);
  let busy2 = $state(false);
</script>

<svelte:head>
  <title>{data.name}</title>
</svelte:head>

<article>
  <div>
    <img src={image} alt="" onerror={() => (image = generic)} />
  </div>
  <div>
    <h1>{data.name}</h1>
    <p>{data.email}</p>
    <p><i class="fa-solid fa-clock"></i> {data.createdAt.toLocaleString()}</p>
    <button
      aria-busy={busy1}
      class="secondary"
      onclick={async () => {
        busy1 = true;
        await signOut();
        document.location = '/';
      }}><i class="fa-solid fa-sign-out"></i> {m['auth.sign-out']()}</button
    >
    <button
      class="contrast outline"
      aria-busy={busy2}
      onclick={async () => {
        busy2 = true;
        await signOutAllDevices();
        document.location = '/';
      }}>{m['auth.sign-out-from-all-devices']()}</button
    >
  </div>
</article>

<style>
  article {
    display: flex;
    gap: 1rem 2rem;
    flex-wrap: wrap;
  }

  div:has(img) {
    width: 100%;

    @media (width >= 48.125rem) {
      width: fit-content;
    }
  }

  div:not(:has(img)) {
    flex-grow: 1;
  }

  img {
    width: 200px;
    border-radius: 50%;
    margin-inline: auto;
    display: block;
  }

  .contrast {
    display: block;
    margin-top: 0.75rem;
  }
</style>
