<script lang="ts">
  import { page } from '$app/state';
  import { getLocale, setLocale } from '$lib/paraglide/runtime';
  import type { Language } from '$lib/utilities/types';

  const { locale, text }: Language = $props();
</script>

<li class={getLocale() === locale ? 'active' : ''}>
  <a
    href={page.url.toString()}
    onclick={(e) => {
      e.preventDefault();
      setLocale(locale);
    }}>{text}</a
  >
</li>

<style>
  .active a {
    color: var(--pico-primary);
  }

  a {
    text-align: left;
  }
</style>
