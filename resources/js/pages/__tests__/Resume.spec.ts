import Vue from 'vue';
import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';
import Resume from '../Resume.vue';
import { testElementId } from '../../utilities/jestHelpers';

const localVue = createLocalVue();

describe('Resume', () => {
	let wrapper: Wrapper<Vue>;

	beforeEach(() => {
		wrapper = shallowMount<Vue>(Resume, {
			localVue,
		});
	});

	afterEach(() => {
		wrapper.destroy();
	});

	it('verifies the Resume ID of the mounted component', () => {
		testElementId(wrapper, 'page-resume');
	});
});
