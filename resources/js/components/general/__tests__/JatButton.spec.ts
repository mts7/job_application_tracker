import Vue from 'vue';
import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';
import JatButton from '../JatButton.vue';
import { testElementId } from '../../../utilities/jestHelpers';

const localVue = createLocalVue();

describe('JatButton', () => {
	const buttonText = 'Click Me';
	const inputId = 'input_clicker';
	let wrapper: Wrapper<Vue>;

	beforeEach(() => {
		wrapper = shallowMount<Vue>(JatButton, {
			localVue,
			propsData: {
				buttonText,
				inputId,
			},
		});
	});

	afterEach(() => {
		wrapper.destroy();
	});

	it('verifies the JatButton ID of the mounted component', () => {
		testElementId(wrapper, `${inputId}_container`);
	});

	it('verifies the button click emits an event with the input ID and has text', () => {
		const button = wrapper.find(`#button_${inputId}`);
		expect(button.text()).toEqual(buttonText);

		button.trigger('click');
		expect(wrapper.emitted('buttonClicked')).toStrictEqual([[inputId]]);
	});
});
