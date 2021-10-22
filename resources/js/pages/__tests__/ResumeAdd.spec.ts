import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';
import ResumeAdd from '../ResumeAdd.vue';
import { testElementId } from '../../utilities/jestHelpers';
import Vue from 'vue';

const localVue = createLocalVue();

describe('ResumeAdd', () => {
	let wrapper: Wrapper<Vue>;

	beforeEach(() => {
		wrapper = shallowMount<
			Vue & {
				createResume: Function;
			}
		>(ResumeAdd, {
			localVue,
		});
	});

	afterEach(() => {
		wrapper.destroy();
	});

	it('verifies the ResumeAdd ID of the mounted component', () => {
		testElementId(wrapper, 'page-resume-add');
	});

	it('tests createResume', () => {
		const spyCreateResume = jest.spyOn(wrapper.vm as any, 'createResume');
		const fields = {
			title: 'title',
			version: 1,
			location: 'location',
			phone: 'phone',
			email: 'email',
			createdAt: null,
			updatedAt: null,
		};
		(wrapper.vm as any).createResume(fields);
		expect(spyCreateResume).toHaveBeenCalled();
	});
});
