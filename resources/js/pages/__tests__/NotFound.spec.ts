import Vue from 'vue';
import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';
import NotFound from '../NotFound.vue';
import { testElementId } from '../../utilities/jestHelpers';

const localVue = createLocalVue();

describe('NotFound', () => {
	let wrapper: Wrapper<Vue>;

	beforeEach(() => {
		wrapper = shallowMount(NotFound, {
			localVue,
		});
	});

	afterEach(() => {
		wrapper.destroy();
	});

	it('verifies the NotFound ID of the mounted component', () => {
		testElementId(wrapper, 'page-not-found');
	});
});
