<script lang="ts">
  import { slide } from "svelte/transition";

  const { id, ondelete }: { id: number; ondelete: Function } = $props();

  let isOpen = $state(false);
</script>

<div>
  <button onclick={() => (isOpen = !isOpen)} aria-label="More" class="icon">
    <i class="fa-solid fa-ellipsis-vertical"></i>
  </button>

  {#if isOpen}
    <ul transition:slide>
      <li>
        <a href="/edit/estimate/{id}" aria-label="Edit">
          <i class="fa-solid fa-pen"></i>
          Edit
        </a>
      </li>
      <li>
        <a href="/" aria-label="Delete" onclick={() => ondelete()}>
          <i class="fa-solid fa-trash"></i>
          Delete
        </a>
      </li>
    </ul>
  {/if}
</div>

<style>
  a {
    text-decoration: none;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    --icon-width: 30px;
    --color: var(--pico-color);

    button {
      all: unset;

      &.icon {
        width: var(--icon-width);
        aspect-ratio: 1;
        cursor: pointer;

        display: grid;
        align-items: center;
        justify-content: center;
      }
    }
  }

  ul {
    position: absolute;
    background-color: var(--pico-background-color);
    top: var(--icon-width);
    padding: 0;
    border: 1px solid var(--color);
    border-radius: 2px;

    li {
      list-style: none;
      padding: 0.25rem 0.5rem;

      &:hover {
        background-color: var(--pico-muted-border-color);
      }

      & > * {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      a {
        color: var(--color);
      }
    }
  }

  ul,
  li {
    margin: 0;
  }
</style>
