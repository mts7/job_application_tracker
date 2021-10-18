import { createLocalVue, shallowMount } from '@vue/test-utils';
import IndustryList from '../IndustryList.vue';

const localVue = createLocalVue();

describe('IndustryList', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(IndustryList, {
			localVue,
			propsData: {
				names: [],
			},
		});
	});

	afterEach(() => {
		wrapper.destroy();
	});

	it('tests the industry list component', () => {
		expect(wrapper.vm.$el.id).toStrictEqual('component-industry-list');
	});

	it('verifies the number of names provided match table cell count', () => {
		const wrappers = wrapper.find('td.table_industry-list_name');
		const numberOfWrappers = wrappers.length || 0;
		expect(wrapper.vm.names.length).toEqual(numberOfWrappers);
	});
});
