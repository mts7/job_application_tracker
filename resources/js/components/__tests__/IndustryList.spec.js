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
});
