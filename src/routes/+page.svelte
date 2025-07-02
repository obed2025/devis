<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import { m } from "$lib/paraglide/messages";
  import { getAllEstimates } from "$lib/utilities/db";
  import type { Estimate } from "$lib/utilities/types";
</script>

{#await getAllEstimates()}
  <section class="center">
    <p class="big loading">⏳</p>
  </section>
{:then estimates}
  {#if !estimates.length}
    <section class="center">
      <span class="big shrug-emoji">🤷‍♂️</span>
      <p>
        {m["empty-db"]()}
        <a href="/new/estimate">{m["add-a-new-project"]()}</a>
      </p>
    </section>
  {:else}
    <div>
      {@render Estimates(estimates)}
    </div>
  {/if}
{/await}

{#snippet Estimates(estimates: [number, Estimate][])}
  {#each estimates as [id, estimate]}
    {@const { title, scopeOfWork } = estimate}

    <Card {title} {scopeOfWork} {id}></Card>
  {/each}
{/snippet}

<style>
  div {
    display: grid;
    --min: 250px;
    grid-template-columns: repeat(auto-fill, minmax(var(--min), 1fr));
    gap: 1rem;

    @media (width >= 700px) {
      --min: 300px;
    }

    @media (width >= 1000px) {
      --min: 350px;
    }
  }

  section {
    text-align: center;
  }

  .big {
    font-size: 5rem;
  }

  .loading {
    animation: shake-rotate 1.5s infinite;
  }

  @keyframes shake-rotate {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
    }
    25% {
      transform: translateY(-10px) rotate(10deg);
    }
    50% {
      transform: translateY(0) rotate(-10deg);
    }
    75% {
      transform: translateY(10px) rotate(10deg);
    }
  }
  .shrug-emoji {
    display: inline-block;
    animation: shrug 1.5s ease-in-out infinite;
  }

  @keyframes shrug {
    0%,
    100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-10px);
    }
    40% {
      transform: translateY(5px);
    }
    60% {
      transform: translateY(-5px);
    }
    80% {
      transform: translateY(2px);
    }
  }
</style>
