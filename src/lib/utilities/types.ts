import type { Locale } from '$lib/paraglide/runtime';
import type { ObjectId } from 'mongodb';

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
  _id: ObjectId;
  title: string;
  scopeOfWork: string;
  expenses: Expense[];
  extraExpenses?: ExtraExpense[];
  note?: string;
  currency?: string;
  userID: string;
  createdAt: Date;
}
