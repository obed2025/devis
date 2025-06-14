export interface Link {
	href: string;
	text: string;
	icon: string;
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

export interface Estimation {
	title: string;
	scopeOfWork: string;
	expenses: Expense[];
	extraExpenses?: ExtraExpense[];
	note?: string;
	currency?: string;
}
