<script lang="ts">
  import { fade } from "svelte/transition";

  let prevScrollY = $state(0);
  let scrollY = $state(0);
  let btnIsVisible = $state(false);
  let timeoutId: number | undefined;

  $effect(() =>
    scrollY < prevScrollY && scrollY >= innerHeight / 2
      ? showButton()
      : hideButton()
  );

  function showButton() {
    btnIsVisible = true;
    clearButtonTimeout();

    timeoutId = setTimeout(() => (btnIsVisible = false), 3000);
  }

  function hideButton() {
    btnIsVisible = false;
    clearButtonTimeout();
  }

  function clearButtonTimeout() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }
  }
</script>

<svelte:window bind:scrollY onscroll={() => (prevScrollY = scrollY)} />

{#if btnIsVisible}
  <button
    aria-label="Scroll to top"
    transition:fade
    onclick={() => (scrollY = 0)}
  >
    <i class="fa-solid fa-arrow-up-long"></i>
  </button>
{/if}

<style>
  button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
  }
</style>
