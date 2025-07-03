<script lang="ts">
  import { m } from "$lib/paraglide/messages";
  import { globalEstimate } from "$lib/utilities/states.svelte";
  import EditCurrency from "./EditCurrency.svelte";
  import ExtraExpensesForm from "./ExtraExpensesForm.svelte";

  function addExtraExpense() {
    globalEstimate.extraExpenses.push({
      desc: "",
      amount: undefined,
    });
  }
</script>

<details name="edit-estimate">
  <summary>{m.secondary()}</summary>
  <section spellcheck="false">
    <EditCurrency></EditCurrency>
    <ExtraExpensesForm></ExtraExpensesForm>
    <button
      class="secondary outline"
      aria-label="Add an expense"
      onclick={addExtraExpense}
    >
      <i class="fa-solid fa-plus"></i>
    </button>
    <textarea bind:value={globalEstimate.note} placeholder={"⚠️ " + m.note()}
    ></textarea>
  </section>
</details>

<style>
  textarea {
    margin-top: 1rem;
  }
</style>
