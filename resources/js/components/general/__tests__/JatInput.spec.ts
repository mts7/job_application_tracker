import Vue from 'vue';
import {
	createLocalVue,
	shallowMount,
	Wrapper,
	WrapperArray,
} from '@vue/test-utils';
import JatInput from '../JatInput.vue';
import { testElementId } from '../../../utilities/jestHelpers';

const localVue = createLocalVue();

describe('JatInput', () => {
	let wrapper: Wrapper<
		Vue & {
			inputValue: string;
		}
	>;

	function mountPage(options: Record<string, any>): void {
		wrapper = shallowMount<
			Vue & {
				inputValue: string;
			}
		>(JatInput, {
			localVue,
			...options,
		});
	}

	afterEach(() => {
		wrapper.destroy();
	});

	it('verifies the JatInput ID of the mounted component', () => {
		const propsData = {
			inputId: 'input_tester',
		};
		mountPage({ propsData });
		testElementId(wrapper, `${propsData.inputId}_container`);
	});

	it('has both a label and an input', () => {
		const propsData = {
			inputId: 'input_tester',
			labelValue: 'Text Tester',
		};
		mountPage({ propsData });

		const label = wrapper.find(`label[for=${propsData.inputId}]`);
		expect(label.text()).toBe(propsData.labelValue);
		expect(label.classes()).toContain('label-input');

		const input = wrapper.find(`#${propsData.inputId}`);
		expect(input).toBeDefined();
		expect(input.classes()).toContain('input-text');

		// verify there is only one row (no errors)
		const rows: WrapperArray<Vue> = wrapper.findAll('.row');
		expect(rows.length).toBe(1);
	});

	it('sets text and verifies the emittance of the input event', () => {
		const propsData = {
			inputId: 'input_tester',
			labelValue: 'Text Tester',
		};
		mountPage({ propsData });

		const inputValue = 'Vue.js';
		const input = wrapper.find(`#${propsData.inputId}`);
		input.setValue(inputValue);
		expect(wrapper.emitted('input')).toStrictEqual([[inputValue]]);
		expect(wrapper.vm.inputValue).toEqual(inputValue);
	});

	it('verifies errors display when passed', () => {
		const propsData = {
			errors: ['First Error', 'Second Error'],
			inputId: 'input_tester',
			labelValue: 'Text Tester',
		};
		mountPage({ propsData });

		// there should be 1 row for the input elements and 1 for the errors
		const rows: WrapperArray<Vue> = wrapper.findAll('.row');
		expect(rows.length).toBe(2);

		const numberOfErrors = propsData.errors.length;
		// there should be one error item per error message passed
		const errorItems = wrapper.findAll('.input-error_item');
		expect(errorItems.length).toBe(numberOfErrors);

		for (let i: number = 0; i < numberOfErrors; i++) {
			expect(errorItems.at(i).text()).toBe(propsData.errors[i]);
		}
	});
});
