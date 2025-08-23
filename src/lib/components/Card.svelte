<script lang="ts">
  import { selectedEstimates } from '$lib/utilities/states.svelte';
  import type { ObjectId } from 'mongodb';

  interface CardProps {
    _id: ObjectId;
    createdAt: Date;
    title: string;
    scopeOfWork?: string;
  }

  const { _id, createdAt, title, scopeOfWork }: CardProps = $props();
  const readableDate = new Date(createdAt).toLocaleDateString(undefined, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
</script>

<article>
  <header>
    <input
      type="checkbox"
      bind:checked={
        () => selectedEstimates.ids.includes(_id),
        (v) => {
          selectedEstimates[v ? 'add' : 'remove'](_id);
        }
      }
    />
    <h4>
      <a href="/open/{_id}">{title}</a>
    </h4>
    <button aria-label="Delete"><i class="fa-solid fa-trash"></i></button>
  </header>

  <p>{scopeOfWork}</p>
  <time datetime={createdAt.toString()}>{readableDate}</time>
</article>

<style lang="scss">
  @use '@picocss/pico/scss/colors' as *;

  a {
    text-decoration: none;
    color: inherit;
  }

  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 0.5rem;
  }

  button {
    all: unset;
    display: flex;
    height: fit-content;
    color: $red-500;
    cursor: pointer;
  }

  h4 {
    line-height: 1;
  }
</style>
