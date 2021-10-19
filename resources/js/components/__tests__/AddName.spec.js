import { createLocalVue, shallowMount } from '@vue/test-utils';
import AddName from '../AddName.vue';
import { testElementId } from '../../utilities/jestHelpers.ts';

const localVue = createLocalVue();

describe('AddName', () => {
	let wrapper;

	afterEach(() => {
		wrapper.destroy();
	});

	beforeEach(() => {
		wrapper = shallowMount(AddName, {
			localVue,
			propsData: {
				fieldName: 'AddName',
			},
		});
	});

	describe('UI Elements', () => {
		it('tests the add name component', () => {
			testElementId(wrapper, 'component_add-name');
		});

		it('verifies a label exists', () => {
			const label = wrapper.find('label.label-input');
			expect(label.exists()).toBe(true);
		});

		it('verifies an input exists', () => {
			const input = wrapper.find('input#input_name');
			expect(input.exists()).toBe(true);
		});

		it('verifies a button exists', () => {
			const button = wrapper.find('button#button_input_name');
			expect(button.exists()).toBe(true);
		});
	});

	describe('Methods', () => {
		it('verifies no emittance if there is no name value', () => {
			expect(wrapper.vm.nameValue).toBe('');
			wrapper.vm.emitSaveName();
			expect(wrapper.emitted().addNameSave).toBe(undefined);
		});

		it('verifies emittance if there is a name value', () => {
			const nameValue = 'Vue.Js';

			wrapper.setData({
				nameValue,
			});
			expect(wrapper.vm.nameValue).toBe(nameValue);

			wrapper.vm.emitSaveName();
			expect(wrapper.emitted().addNameSave[0][0]).toBe(nameValue);
			expect(wrapper.vm.nameValue).toBe('');
		});

		it('verifies emittance when a value is entered and the button is clicked', () => {
			const nameValue = 'Vue.Js';

			// verify the datum is empty
			expect(wrapper.vm.nameValue).toBe('');

			// type the value into the input field
			const input = wrapper.find('input#input_name');
			input.setValue(nameValue);
			// verify the input now has the value
			expect(wrapper.vm.nameValue).toBe(nameValue);

			// click the button
			const button = wrapper.find('button#button_input_name');
			button.trigger('click');
			// verify the value was emitted and then cleared
			expect(wrapper.emitted().addNameSave[0][0]).toBe(nameValue);
			expect(wrapper.vm.nameValue).toBe('');
		});
	});
});
