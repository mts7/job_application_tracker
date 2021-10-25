import Vue from 'vue';

export interface IRoutesNames {
	home: string;
	industry: string;
	notFound: string;
	position: string;
	resume: string;
	resumeAdd: string;
}

const routesNames: Readonly<IRoutesNames> = {
	home: 'home',
	industry: 'industry',
	notFound: 'notFound',
	position: 'position',
	resume: 'resume',
	resumeAdd: 'resumeAdd',
};

declare module 'vue/types/vue' {
	interface Vue {
		$routesNames: IRoutesNames;
	}
}

export default routesNames;
