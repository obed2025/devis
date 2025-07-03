<script lang="ts">
  import { globalEstimate } from "$lib/utilities/states.svelte";
  import { data } from "currency-codes";

  data.sort((a, b) => a.currency.localeCompare(b.currency));

  const searchResults = $derived(
    data.filter((value) => {
      const lowerCaseCurrency = globalEstimate.currency.toLocaleLowerCase();
      const lowerCaseCode = value.code.toLocaleLowerCase();
      const lowerCaseDataCurrency = value.currency.toLocaleLowerCase();

      return (
        lowerCaseCode.includes(lowerCaseCurrency) ||
        lowerCaseDataCurrency.includes(lowerCaseCurrency)
      );
    })
  );
</script>

<input type="search" bind:value={globalEstimate.currency} />

<div>
  {#each searchResults as { currency, code }}
    <label>
      <input
        type="radio"
        name="currency"
        value={code}
        bind:group={globalEstimate.currency}
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
  }
</style>
