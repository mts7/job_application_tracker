import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';
import NamePage from '../NamePage.vue';
import { testElementId } from '../../utilities/jestHelpers';
import { uCFirst } from '../../utilities';
import Vue from 'vue';

const localVue = createLocalVue();

describe('NamePage', () => {
	let wrapper: Wrapper<
		Vue & {
			itemDisplayName: string;
			itemUseName: string;
			saveName: Function;
		}
	>;

	function mountPage(options: Record<string, any>) {
		wrapper = shallowMount<
			Vue & {
				itemDisplayName: string;
				itemUseName: string;
				saveName: Function;
			}
		>(NamePage, {
			localVue,
			...options,
		});
	}

	afterEach(() => {
		wrapper.destroy();
	});

	it('verifies name page loads with an ID and a lowercase name', () => {
		const itemName: string = 'Tester';
		const names: string[] = [];
		mountPage({
			propsData: {
				itemName,
				names,
			},
		});
		expect(wrapper.vm.$props.itemName).toBe(itemName);

		const itemUseName: string = wrapper.vm.itemUseName;
		testElementId(wrapper, `page-${itemUseName}`);

		const useName: string = itemName.toLowerCase();
		expect(wrapper.vm.itemUseName).toBe(useName);
	});

	it('verifies display name begins with a capital letter', () => {
		const itemName: string = 'tester';
		const names: string[] = [];
		mountPage({
			propsData: {
				itemName,
				names,
			},
		});

		const displayName: string = uCFirst(itemName);

		expect(wrapper.vm.itemDisplayName).toBe(displayName);
		expect(wrapper.find('h2').text()).toBe(displayName);
	});

	it('verifies saveName emits an event with the name', () => {
		const itemName: string = 'tester';
		const names: string[] = [];
		mountPage({
			propsData: {
				itemName,
				names,
			},
		});

		const nameValue: string = 'Vue.js';
		wrapper.vm.saveName(nameValue);
		expect(wrapper.emitted('saveName')).toStrictEqual([[nameValue]]);
	});
});
