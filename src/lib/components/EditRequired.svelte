<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import type { Estimate } from '$lib/utilities/types';
  import ExpensesForm from './ExpensesForm.svelte';

  interface Props {
    globalEstimate: {
      data: Estimate;
    };
  }

  function addExpense() {
    globalEstimate.data.expenses.push({
      desc: '',
      unit: '',
      qty: undefined,
      unitCost: undefined,
    });
  }

  const { globalEstimate }: Props = $props();
</script>

<details name="edit-estimate" open>
  <summary>{m.primary()}</summary>
  <section spellcheck="false">
    <h1 contenteditable bind:innerText={globalEstimate.data.title}></h1>
    <h2 contenteditable bind:innerText={globalEstimate.data.scopeOfWork}></h2>

    <ExpensesForm {globalEstimate}></ExpensesForm>

    <button
      class="secondary outline"
      aria-label="Add an expense"
      onclick={addExpense}
    >
      <i class="fa-solid fa-plus"></i>
    </button>
  </section>
</details>
