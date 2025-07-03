<script lang="ts">
  import { m } from "$lib/paraglide/messages";
  import { globalEstimate } from "$lib/utilities/states.svelte";
  import ExpensesForm from "./ExpensesForm.svelte";

  function addExpense() {
    globalEstimate.expenses.push({
      desc: "",
      unit: "",
      qty: undefined,
      unitCost: undefined,
    });
  }
</script>

<details name="edit-estimate" open>
  <summary>{m.primary()}</summary>
  <section spellcheck="false">
    <h1 contenteditable bind:innerText={globalEstimate.title}></h1>
    <h2 contenteditable bind:innerText={globalEstimate.scopeOfWork}></h2>

    <ExpensesForm></ExpensesForm>

    <button
      class="secondary outline"
      aria-label="Add an expense"
      onclick={addExpense}
    >
      <i class="fa-solid fa-plus"></i>
    </button>
  </section>
</details>
