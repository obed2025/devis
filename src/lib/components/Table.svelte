<script lang="ts">
  import { m } from "$lib/paraglide/messages";
  import { format } from "$lib/utilities/db";
  import type { Expense, ExtraExpense } from "$lib/utilities/types";
  import TableHead from "./TableHead.svelte";

  interface Props {
    expenses: Expense[];
    extraExpenses?: ExtraExpense[];
    currency?: string;
  }

  const { expenses, extraExpenses, currency }: Props = $props();

  const subTotal = expenses.reduce(
    (prev, curr) => prev + (curr?.qty ?? 1) * (curr?.unitCost ?? 0),
    0
  );

  const grandTotal =
    subTotal +
    (extraExpenses?.reduce((prev, curr) => prev + (curr?.amount ?? 0), 0) ?? 0);
</script>

<table class="striped">
  <TableHead></TableHead>
  <tbody>
    {#each expenses as exp, i}
      {@const amount = format((exp?.qty ?? 1) * (exp?.unitCost ?? 0), currency)}

      <tr>
        <th scope="row">{i + 1}</th>
        <td>{exp.desc}</td>
        <td>{exp.unit}</td>
        <td>{exp.qty?.toLocaleString()}</td>
        <td>{exp.qty ? format(exp?.unitCost ?? 0, currency) : ""}</td>
        <td>{amount}</td>
      </tr>
    {/each}

    {#if extraExpenses?.length}
      <tr>
        <th scope="row"></th>
        <td colspan="4">{m["table.sub-total"]()}</td>
        <td>{format(subTotal, currency)}</td>
      </tr>
    {/if}

    {#each extraExpenses ?? [] as { desc, amount }, i}
      <tr>
        <th scope="row">{expenses.length + i + 1}</th>
        <td colspan="4">{desc}</td>
        <td>{format(amount ?? 0, currency)}</td>
      </tr>
    {/each}

    <tr>
      <th scope="row"></th>
      <td colspan="4" class="bold">{m["table.grand-total"]()}</td>
      <td class="bold">{format(grandTotal, currency)}</td>
    </tr>
  </tbody>
</table>

<style>
  .bold {
    font-weight: bold;
  }

  @media print {
    table,
    tr,
    th,
    td {
      border: 1px solid black;
      background-color: transparent !important;
      color: black;
    }
  }
</style>
