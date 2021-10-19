import { createLocalVue, shallowMount } from '@vue/test-utils';
import NameList from '../NameList.vue';
import { testElementId } from '../../utilities/jestHelpers.ts';

const localVue = createLocalVue();

describe('NameList', () => {
	let wrapper;
	const item = 'Acme';
	const itemUse = item.toLowerCase();

	beforeEach(() => {
		wrapper = shallowMount(NameList, {
			localVue,
			propsData: {
				itemDisplayName: item,
				itemUseName: itemUse,
				names: [],
			},
		});
	});

	afterEach(() => {
		wrapper.destroy();
	});

	it('tests the name list component', () => {
		testElementId(wrapper, `component-${itemUse}-list`);
	});

	it('verifies the number of names provided match table cell count', () => {
		const wrappers = wrapper.find(`td.table_${itemUse}-list_name`);
		const numberOfWrappers = wrappers.length || 0;
		expect(wrapper.vm.names.length).toEqual(numberOfWrappers);
	});
});
