<script>
  import LanguageSwitcher from "./LangS.svelte";
  import { m } from "$lib/paraglide/messages";
  import { selectedEstimates } from "$lib/utilities/states.svelte";
  import { blur } from "svelte/transition";
  import Account from "./Account.svelte";

  const ids = $derived(selectedEstimates.ids);
  const { userImage, userName } = $props();
</script>

<nav class="container-fluid">
  <ul>
    <li>
      <h1>
        <a href="/" translate="no">Devis</a>
      </h1>
    </li>
  </ul>
  <ul>
    {#if ids.length > 1}
      <li transition:blur>
        <a
          href="/open/group?estimates={ids}"
          role="button"
          onclick={() => selectedEstimates.clear()}
          target="_blank"
        >
          <i class="fa-solid fa-external-link"></i>
          <span>{m.open()}</span>
        </a>
      </li>
    {/if}
    <Account {userName} {userImage}></Account>
    <li>
      <a href="/new/estimate" role="button">
        <i class="fa-solid fa-plus-circle"></i>
        <span>{m.new()}</span>
      </a>
    </li>
    <li>
      <LanguageSwitcher></LanguageSwitcher>
    </li>
  </ul>
</nav>

<style>
  @font-face {
    font-family: "great-vibes";
    src: url("/GreatVibes-Regular.ttf");
  }

  nav {
    position: sticky;
    top: 0;
    background-color: rgb(from var(--pico-background-color) r g b / 0.75);
    backdrop-filter: blur(5px);
    z-index: 999999;
  }

  h1 {
    --color: var(--pico-color);

    a {
      color: var(--color);
      font-family: "great-vibes";

      &:hover {
        text-decoration: none;
      }
    }
  }

  @media (width < 41.25rem) {
    a span {
      display: none;
    }

    a:has(span) i {
      font-size: 1.25rem;
    }
  }

  @media print {
    nav {
      display: none;
    }
  }
</style>
