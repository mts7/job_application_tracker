import { Route, RouteConfig } from 'vue-router';
import RoutesNames from './routesNames';

import Industry from '*.vue';
import Position from '*.vue';

export const Routes: RouteConfig[] = [
	{
		path: '/',
		name: RoutesNames.home,
		redirect: { name: RoutesNames.notFound },
	},
	{
		path: '/industry',
		name: RoutesNames.industry,
		component: () => import('../pages/Industry.vue'),
	},
	{
		path: '/position',
		name: RoutesNames.position,
		component: () => import('../pages/Position.vue'),
	},
	{
		path: '/resume-add',
		name: RoutesNames.resumeAdd,
		component: () => import('../pages/ResumeAdd.vue'),
	},
	{
		path: '*',
		name: RoutesNames.notFound,
		component: () => import('../pages/NotFound.vue'),
	},
];
