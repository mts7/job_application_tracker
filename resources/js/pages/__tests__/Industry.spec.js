import { createLocalVue, shallowMount } from '@vue/test-utils';
import Industry from '../Industry.vue';

const localVue = createLocalVue();

describe('Industry', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(Industry, {
			localVue,
		});
	});

	afterEach(() => {
		wrapper.destroy();
	});

	it('tests the industry component', () => {
		expect(wrapper.vm.$el.id).toStrictEqual('page-industry');
	});

	it.skip('verifies the name is saved', () => {
		const nameValue = 'Vue.Js';

		wrapper.vm.saveName(nameValue);
		// TODO: add a test for the save method once it is implemented
	});
});
