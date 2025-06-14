import type { Link } from './types';

export const MENU: Link[] = [
	{
		href: '/new',
		text: 'New Estimation',
		icon: 'plus-circle'
	},
	{
		href: '/about',
		text: 'About',
		icon: 'question-circle'
	}
];

export const COLUMNS = ['#', 'Description', 'Unit', 'Quantity', 'Unit Cost', 'Amount'];
