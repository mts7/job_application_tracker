import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';
import ResumeForm from '../ResumeForm.vue';
import { testElementId } from '../../utilities/jestHelpers';
import Vue from 'vue';

const localVue = createLocalVue();

describe('ResumeForm', () => {
	let wrapper: Wrapper<
		Vue & {
			saveResume: Function;
		}
	>;

	beforeEach(() => {
		wrapper = shallowMount<
			Vue & {
				saveResume: Function;
			}
		>(ResumeForm, {
			localVue,
		});
	});

	afterEach(() => {
		wrapper.destroy();
	});

	it('verifies the ResumeForm ID of the mounted component', () => {
		testElementId(wrapper, 'page-resume-form');
	});

	it('verifies saveResume emits with data', () => {
		const data: Record<string, string> = {
			inputEmail: 'atest@example.org',
			inputLocation: 'AA',
			inputPhone: '8005551234',
			inputTitle: 'My Resume',
			inputVersion: '5',
		};
		wrapper.setData(data);

		const inputId = 'input_tester';
		wrapper.vm.saveResume(inputId);
		const expected = {
			title: data.inputTitle,
			version: parseInt(data.inputVersion),
			location: data.inputLocation,
			phone: data.inputPhone,
			email: data.inputEmail,
		};
		expect(wrapper.emitted('saveResume')).toStrictEqual([[expected]]);
	});
});
