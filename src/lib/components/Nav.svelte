<script>
  import LanguageSwitcher from "./LangS.svelte";
  import { m } from "$lib/paraglide/messages";
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
    <li>
      <a href="/new/estimate" role="button" aria-labelledby="span">
        <i class="fa-solid fa-plus-circle"></i>
        <span id="span">{m.new()}</span>
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

  @media (width < 28rem) {
    a span {
      display: none;
    }

    a:has(span) i {
      font-size: 1.25rem;
    }
  }
</style>
