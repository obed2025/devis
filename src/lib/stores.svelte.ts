import type { Estimation, Expense, ExtraExpense } from './types';

class EstimationStore {
	title: string;
	scopeOfWork: string;
	note?: string;
	expenses: Expense[];
	extraExpenses?: ExtraExpense[];
	currency?: string;

	constructor() {
		this.title = $state('');
		this.scopeOfWork = $state('');
		this.expenses = $state([]);
		this.extraExpenses = $state([]);
		this.note = $state('');
		this.currency = $state('');
	}

	set data(val: Estimation) {
		this.title = val.title;
		this.scopeOfWork = val.scopeOfWork;
		this.note = val.note;
		this.expenses = val.expenses;
		this.extraExpenses = val.extraExpenses;
		this.currency = val.currency;
	}

	get data() {
		return {
			title: this.title,
			scopeOfWork: this.scopeOfWork,
			expenses: this.expenses,
			extraExpenses: this.extraExpenses,
			note: this.note,
			currency: this.currency
		};
	}
}

export const estimationStore = new EstimationStore();
