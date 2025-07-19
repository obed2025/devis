<script lang="ts">
  import { m } from "$lib/paraglide/messages";
  import { getLocale } from "$lib/paraglide/runtime";
  import { RW_MONTH_NAMES } from "$lib/utilities/consts";
  import { deleteEstimate } from "$lib/utilities/db";
  import { fade } from "svelte/transition";
  import More from "./More.svelte";
  import { selectedEstimates } from "$lib/utilities/states.svelte";

  interface Props {
    title: string;
    scopeOfWork: string;
    id: number;
    single?: boolean;
  }

  const { id, scopeOfWork, title, single }: Props = $props();
  let deleted = $state(false);

  const date = (() => {
    const date_ = new Date(id);
    return getLocale() !== "rw"
      ? date_.toLocaleDateString(getLocale(), {
          month: "long",
          day: "2-digit",
          year: "numeric",
          hour: "2-digit",
          hour12: false,
          minute: "2-digit",
        })
      : getRwLocaleDateString(date_);
  })();

  function getRwLocaleDateString(date: Date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = RW_MONTH_NAMES[date.getMonth()];
    const year = date.getFullYear();

    return (
      `${day} ${month} ${year}` +
      " Saa " +
      date.toLocaleTimeString(undefined, {
        hour: "2-digit",
        hour12: false,
        minute: "2-digit",
      })
    );
  }

  async function ondelete() {
    if (confirm(m["delete-confirmation-message"]())) {
      await deleteEstimate(id);
      deleted = true;
    }
  }
</script>

{#if !deleted}
  <div transition:fade class="card">
    <div class="title">
      {#if !single}
        <input
          type="checkbox"
          bind:checked={
            () => selectedEstimates.ids.includes(id),
            (v) => {
              selectedEstimates[v ? "add" : "remove"](id);
            }
          }
        />
      {/if}
      <a href="/open/estimate/{id}" class="limited-lines"
        >{title || m.title()}</a
      >
      <More {id} {ondelete}></More>
    </div>
    <div class="scope-of-work limited-lines">
      {scopeOfWork || m["scope-of-work"]()}
    </div>
    <small class="date">{date}</small>
  </div>
{/if}

<style>
  a {
    text-decoration: none;
    font-weight: 700;
    color: var(--pico-h1-color);

    font-size: 1.2rem;
    --limit: 1;
    max-width: 100%;
  }

  .date {
    font-weight: 180;
  }

  .card {
    padding: 0.5rem;
    border: 1.35px solid var(--pico-color);
    border-radius: 0.25rem;
    display: grid;
    gap: 0.25rem;
    grid-template-rows: auto 1fr auto;
  }

  .title {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 0.5rem;

    a {
      width: fit-content;
    }

    input {
      margin: 0;
    }
  }

  .scope-of-work {
    font-size: 1rem;
    font-weight: 300;
  }

  .limited-lines {
    display: -webkit-box;
    -webkit-line-clamp: var(--limit, 2);
    line-clamp: var(--limit, 2);
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
