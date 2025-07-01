<script lang="ts">
  import { m } from "$lib/paraglide/messages";
  import { LANGUAGES } from "$lib/utilities/consts";
  import LanguageSwitcherItem from "./LangS-Item.svelte";
</script>

<details class="dropdown">
  <!-- svelte-ignore a11y_no_redundant_roles -->
  <summary role="button" class="outline">
    <i class="fa-solid fa-earth"></i>
    <span>{m.language()}</span>
  </summary>
  <ul dir="rtl">
    {#each LANGUAGES as { locale, text }}
      <LanguageSwitcherItem {locale} {text}></LanguageSwitcherItem>
    {/each}
  </ul>
</details>

<style>
  span {
    @media (width < 30rem) {
      display: none;
    }
  }
</style>
