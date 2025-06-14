export function currency(amount: number, currency: string): string {
	try {
		return amount.toLocaleString(undefined, { style: 'currency', currency });
	} catch (error) {
		return 'Error';
	}
}
