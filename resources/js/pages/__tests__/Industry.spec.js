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

	it('verifies the name is saved in the data', () => {
		const nameValue = 'Vue.Js';

		wrapper.vm.saveName(nameValue);
		expect(wrapper.vm.names).toContain(nameValue);
	});

	it('verifies the acquisition of names', () => {
		const spyGetNames = jest.spyOn(wrapper.vm, 'getNames');
		wrapper.vm.getNames();
		// TODO: add a test for the get method once it is implemented
		expect(spyGetNames).toHaveBeenCalled();
	});
});
