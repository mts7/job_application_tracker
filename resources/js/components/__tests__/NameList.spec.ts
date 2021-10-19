import {
	createLocalVue,
	shallowMount,
	Wrapper,
	WrapperArray,
} from '@vue/test-utils';
import NameList from '../NameList.vue';
import { testElementId } from '../../utilities/jestHelpers';
import Vue from 'vue';

const localVue = createLocalVue();

describe('NameList', () => {
	let wrapper: Wrapper<
		Vue & {
			names: string[];
			textNoRecords: string;
		}
	>;
	const item = 'Acme';
	const itemUse = item.toLowerCase();

	function mountPage(names: string[] = []) {
		wrapper = shallowMount<
			Vue & {
				names: string[];
				textNoRecords: string;
			}
		>(NameList, {
			localVue,
			propsData: {
				itemDisplayName: item,
				itemUseName: itemUse,
				names,
			},
		});
	}

	afterEach(() => {
		wrapper.destroy();
	});

	it('tests the name list component', () => {
		mountPage();
		testElementId(wrapper, `component-${itemUse}-list`);
	});

	it('verifies the number of empty names matches the cell count of 0', () => {
		mountPage();
		const wrappers: WrapperArray<Vue> = wrapper.findAll(
			`td.table_${itemUse}-list_name`,
		);
		const numberOfWrappers = wrappers.length || 0;
		expect(wrapper.vm.names.length).toEqual(numberOfWrappers);

		expect(wrapper.text()).toContain(wrapper.vm.textNoRecords);
	});

	it('verifies the number of names provided matches the cell count', () => {
		const names: string[] = [
			'apple',
			'banana',
			'cherry',
			'date',
			'eggplant',
			'fig',
			'grape',
			'honeydew',
		];
		mountPage(names);
		const namesLength = wrapper.vm.names.length;
		expect(names.length).toEqual(namesLength);

		const wrappers: WrapperArray<Vue> = wrapper.findAll(
			`td.table_${itemUse}-list_name`,
		);
		const numberOfWrappers = wrappers.length || 0;
		expect(namesLength).toEqual(numberOfWrappers);

		expect(wrapper.text()).not.toContain(wrapper.vm.textNoRecords);
	});
});
