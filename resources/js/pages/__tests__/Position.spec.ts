import { createLocalVue, mount, Wrapper } from '@vue/test-utils';
import Position from '../Position.vue';
import { testElementId } from '../../utilities/jestHelpers';
import Vue from 'vue';

const localVue = createLocalVue();

describe('Position', () => {
	let wrapper: Wrapper<
		Vue & {
			getNames: Function;
			names: string[];
			saveName: Function;
		}
	>;

	beforeEach(() => {
		wrapper = mount<
			Vue & {
				getNames: Function;
				names: string[];
				saveName: Function;
			}
		>(Position, {
			localVue,
		});
	});

	afterEach(() => {
		wrapper.destroy();
	});

	it('verifies the Position ID of the mounted component', () => {
		testElementId(wrapper, 'page-position');
	});

	it('verifies the name is saved in the data', () => {
		const nameValue = 'Vue.Js';

		wrapper.vm.saveName(nameValue);
		expect(wrapper.vm.names).toContain(nameValue);
	});

	it('verifies the acquisition of names', () => {
		const spyGetNames = jest.spyOn(wrapper.vm as any, 'getNames');
		wrapper.vm.getNames();
		// TODO: add a test for the get method once it is implemented
		expect(spyGetNames).toHaveBeenCalled();
	});
});
