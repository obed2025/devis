import type { Estimate, Expense, ExtraExpense } from "./types";

export const globalEstimate = new (class {
  title: string = $state("");
  scopeOfWork: string = $state("");
  expenses: Expense[] = $state([]);

  currency: string = $state("");
  extraExpenses: ExtraExpense[] = $state([]);
  note: string = $state("");

  set data(estimate: Estimate) {
    this.title = estimate.title;
    this.scopeOfWork = estimate.scopeOfWork;
    this.expenses = estimate.expenses;
    this.currency = estimate?.currency ?? "";
    this.extraExpenses = estimate?.extraExpenses ?? [];
    this.note = estimate?.note ?? "";
  }

  get data() {
    return {
      title: this.title,
      scopeOfWork: this.scopeOfWork,
      expenses: this.expenses,
      currency: this.currency,
      extraExpenses: this.extraExpenses,
      note: this.note,
    };
  }
})();
