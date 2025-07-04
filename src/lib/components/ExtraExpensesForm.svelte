<script>
  import { m } from "$lib/paraglide/messages";
  import { globalEstimate } from "$lib/utilities/states.svelte";
  import { fade } from "svelte/transition";
</script>

<div class="form grid">
  {#each globalEstimate.extraExpenses as extraExpense, i}
    <fieldset transition:fade>
      <input
        type="text"
        bind:value={extraExpense.desc}
        placeholder={m["expense.desc"]()}
      />
      <input
        type="number"
        bind:value={extraExpense.amount}
        placeholder={m["amount"]()}
      />
      <button
        aria-label="Delete"
        class="contrast outline red"
        onclick={() => globalEstimate.extraExpenses.splice(i, 1)}
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    </fieldset>
  {/each}
</div>
