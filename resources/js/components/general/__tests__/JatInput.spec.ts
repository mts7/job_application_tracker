import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';
import JatInput from '../JatInput.vue';
import { testElementId } from '../../../utilities/jestHelpers';
import Vue from 'vue';

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
	});
});
