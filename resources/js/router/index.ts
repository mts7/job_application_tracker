import Vue from 'vue';
import VueRouter from 'vue-router';
import { Routes } from './routes';
import RoutesNames from './routesNames';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: Routes,
});

export { RoutesNames };
export default router;
