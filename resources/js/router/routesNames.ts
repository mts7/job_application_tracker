import Vue from 'vue';

export interface IRoutesNames {
	home: string;
	industry: string;
	position: string;
}

const routesNames: Readonly<IRoutesNames> = {
	home: 'home',
	industry: 'industry',
	position: 'position',
};

declare module 'vue/types/vue' {
	interface Vue {
		$routesNames: IRoutesNames;
	}
}

export default routesNames;
