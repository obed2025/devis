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

export const OPEN_GRAPH = {
	title: 'Devis',
	desc: 'A web-based tool designed to simplify the process of creating price estimations, especially for those working in construction or similar fields.'
};

export const COLUMNS = ['#', 'Description', 'Unit', 'Quantity', 'Unit Cost', 'Amount'];
