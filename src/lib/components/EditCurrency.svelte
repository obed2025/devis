<script lang="ts">
  import type { Estimate } from '$lib/utilities/types';
  import { data } from 'currency-codes';

  interface Props {
    globalEstimate: {
      data: Estimate;
    };
  }

  const { globalEstimate }: Props = $props();

  data.sort((a, b) => a.currency.localeCompare(b.currency));

  const searchResults = $derived(
    data.filter((value) => {
      const lowerCaseCurrency =
        globalEstimate.data.currency?.toLocaleLowerCase();
      const lowerCaseCode = value.code.toLocaleLowerCase();
      const lowerCaseDataCurrency = value.currency.toLocaleLowerCase();

      return (
        lowerCaseCode.includes(lowerCaseCurrency ?? '') ||
        lowerCaseDataCurrency.includes(lowerCaseCurrency ?? '')
      );
    })
  );
</script>

<input type="search" bind:value={globalEstimate.data.currency} />

<div>
  {#each searchResults as { currency, code }}
    <label>
      <input
        type="radio"
        name="currency"
        value={code}
        bind:group={globalEstimate.data.currency}
      />
      {currency} - {code}
    </label>
  {/each}
</div>

<style>
  div {
    max-height: 50vh;
    overflow: auto;
    margin-block: 0.5rem;
    display: none;
  }

  input:focus + div,
  div:hover {
    display: block;
  }
</style>
