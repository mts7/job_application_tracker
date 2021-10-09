import { createLocalVue, shallowMount } from '@vue/test-utils';
import ExampleComponent from '../ExampleComponent.vue';

const localVue = createLocalVue();

describe('ExampleComponent', () => {
	let wrapper;

	it('tests the example component', () => {
		wrapper = shallowMount(ExampleComponent, {
			localVue,
		});
		expect(wrapper.vm.$el.className).toStrictEqual('container');
		expect(wrapper.find('.card-header').text()).toStrictEqual(
			'Example Component',
		);
		wrapper.destroy();
	});
});
