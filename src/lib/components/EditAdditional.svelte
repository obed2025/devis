<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import type { Estimate } from '$lib/utilities/types';
  import EditCurrency from './EditCurrency.svelte';
  import ExtraExpensesForm from './ExtraExpensesForm.svelte';

  interface Props {
    globalEstimate: {
      data: Estimate;
    };
  }

  const { globalEstimate }: Props = $props();

  function addExtraExpense() {
    globalEstimate.data.extraExpenses?.push({
      desc: '',
      amount: undefined,
    });
  }
</script>

<details name="edit-estimate">
  <summary>{m.secondary()}</summary>
  <section spellcheck="false">
    <EditCurrency {globalEstimate}></EditCurrency>
    <ExtraExpensesForm {globalEstimate}></ExtraExpensesForm>
    <button
      class="secondary outline"
      aria-label="Add an expense"
      onclick={addExtraExpense}
    >
      <i class="fa-solid fa-plus"></i>
    </button>
    <textarea
      bind:value={globalEstimate.data.note}
      placeholder={'⚠️ ' + m.note()}
    ></textarea>
  </section>
</details>

<style>
  textarea {
    margin-top: 1rem;
  }
</style>
