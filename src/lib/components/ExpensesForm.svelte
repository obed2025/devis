<script>
  import { m } from "$lib/paraglide/messages";
  import { globalEstimate } from "$lib/utilities/states.svelte";
  import { fade } from "svelte/transition";
</script>

<div class="form flex">
  {#each globalEstimate.expenses as expense, i}
    <fieldset transition:fade>
      <input
        type="text"
        bind:value={expense.desc}
        placeholder={m["expense.desc"]()}
      />
      <input
        type="text"
        bind:value={expense.unit}
        placeholder={m["expense.unit"]()}
      />
      <input
        type="number"
        bind:value={expense.qty}
        placeholder={m["expense.qty"]()}
      />
      <input
        type="number"
        bind:value={expense.unitCost}
        placeholder={m["expense.unit-cost"]()}
      />
      <button
        aria-label="Delete"
        class="contrast outline red"
        onclick={() => globalEstimate.expenses.splice(i, 1)}
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    </fieldset>
  {/each}
</div>
