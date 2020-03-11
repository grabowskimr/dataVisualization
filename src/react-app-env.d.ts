/// <reference types="react-scripts" />

type MenuItem = {
	name: string;
	url: string;
};

type MenuItems = {
	[name: string]: MenuItem;
};

type Job = {
	name: string;
	agriculture: number;
	manufacturing: number;
	mining: number;
	trade: number;
	'domestic service': number;
	'professional service': number;
};

type States = {
	[name: string]: string;
};

type ReduxState = {
	jobs: Job[];
	states: States;
	population: any;
};

type Action = {
	type: symbol;
	payload: Partial<ReduxState>;
};
