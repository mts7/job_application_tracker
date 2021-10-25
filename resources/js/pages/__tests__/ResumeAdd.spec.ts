import Vue from 'vue';
import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';
import ResumeAdd from '../ResumeAdd.vue';
import RoutesNames from '../../router/routesNames';
import { IResumeFields } from '../../types/Resume';
import { testElementId } from '../../utilities/jestHelpers';

const localVue = createLocalVue();

const routerPush = jest.fn();
const $router = {
	push: routerPush,
};

describe('ResumeAdd', () => {
	let wrapper: Wrapper<
		Vue & {
			createResume: Function;
		}
	>;

	beforeEach(() => {
		wrapper = shallowMount<
			Vue & {
				createResume: Function;
			}
		>(ResumeAdd, {
			localVue,
			mocks: {
				$router,
			},
		});
	});

	afterEach(() => {
		wrapper.destroy();
	});

	it('verifies the ResumeAdd ID of the mounted component', () => {
		testElementId(wrapper, 'page-resume-add');
	});

	it('tests createResume', () => {
		const fields: IResumeFields = {
			title: 'title',
			version: 1,
			location: 'location',
			phone: 'phone',
			email: 'email',
			createdAt: null,
			updatedAt: null,
		};
		wrapper.vm.createResume(fields);
		expect(routerPush).toHaveBeenCalledWith(RoutesNames.resume);
	});
});
