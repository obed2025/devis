<script lang="ts">
  import { signOut } from "$lib/auth-client";
  import { clear } from "idb-keyval";

  const { userName, userImage } = $props();
  let details: HTMLDetailsElement | undefined = $state();

  const hideDropdown = () => {
    details?.removeAttribute("open");
  };
</script>

{#if !userName && !userImage}
  <li>
    <a href="/sign-in" role="button" class="secondary outline">
      <i class="fa-solid fa-sign-in"></i>
      <span>Sign in</span>
    </a>
  </li>
{:else}
  <details class="dropdown" bind:this={details}>
    <!-- svelte-ignore a11y_no_redundant_roles -->
    <summary role="button" class="outline secondary">
      <img src={userImage} alt={userName} />
      <span>{userName}</span>
    </summary>
    <ul>
      <li>
        <a
          href="/"
          onclick={async () => {
            await signOut();
            await clear();
            document.location = "/";
          }}
        >
          <i class="fa-solid fa-sign-out"></i>
          <span>Sign Out</span>
        </a>
      </li>
      <li>
        <a href="/sync-changes" onclick={hideDropdown}>
          <i class="fa-solid fa-sync"></i>
          <span>Sync Changes</span>
        </a>
      </li>
    </ul>
  </details>
{/if}

<style>
  img {
    width: 1.7rem;
    border-radius: 50%;
  }

  summary span {
    @media (width <= 55rem) {
      display: none;
    }
  }
</style>
