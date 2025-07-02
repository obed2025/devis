import type { Locale } from "$lib/paraglide/runtime";

export interface Language {
  locale: Locale;
  text: string;
}

export interface Expense {
  desc: string;
  unit?: string;
  qty?: number;
  unitCost?: number;
}

export interface ExtraExpense {
  desc: string;
  amount?: number;
}

export interface Estimate {
  title: string;
  scopeOfWork: string;
  expenses: Expense[];
  extraExpenses?: ExtraExpense[];
  note?: string;
  currency?: string;
}
