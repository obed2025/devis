<script lang="ts">
  import { goto } from "$app/navigation";
  import { getLocale } from "$lib/paraglide/runtime";
  import { RW_MONTH_NAMES } from "$lib/utilities/consts";
  import { deleteEstimate } from "$lib/utilities/db";
  import { fade } from "svelte/transition";

  interface Props {
    title: string;
    scopeOfWork: string;
    id: number;
  }

  const { id, scopeOfWork, title }: Props = $props();
  let deleted = $state(false);

  const date = (() => {
    const date_ = new Date(id);
    return getLocale() !== "rw"
      ? date_.toLocaleDateString(getLocale(), {
          month: "long",
          day: "2-digit",
          year: "numeric",
        })
      : getRwLocaleDateString(date_);
  })();

  function getRwLocaleDateString(date: Date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = RW_MONTH_NAMES[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }

  function ondelete() {
    deleteEstimate(id);
    deleted = true;
  }
</script>

{#if !deleted}
  <article transition:fade>
    {@render Header()}
    <p class="limited-lines">
      {scopeOfWork}
    </p>
    {@render Footer()}
  </article>
{/if}

{#snippet Header()}
  <header>
    <a href="/open/estimate/{id}" class="limited-lines">{title}</a>
    <button
      class="contrast outline"
      aria-label="Edit"
      onclick={() => goto(`/edit/estimate/${id}`)}
    >
      <i class="fa-solid fa-pen"></i>
    </button>
  </header>
{/snippet}

{#snippet Footer()}
  <footer>
    <span>{date}</span>
    <button class="contrast outline red" aria-label="Edit" onclick={ondelete}>
      <i class="fa-solid fa-trash"></i>
    </button>
  </footer>
{/snippet}

<style lang="scss">
  article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      flex-grow: 1;
    }
  }

  .limited-lines {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--limit, 2);
    line-clamp: var(--limit, 2);
    overflow: hidden;
    text-overflow: ellipsis;
  }

  a {
    text-decoration: none;
  }

  footer {
    font-style: italic;
    align-items: center;
  }

  footer,
  header {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr auto;
  }

  header {
    font-weight: 600;
  }
</style>
