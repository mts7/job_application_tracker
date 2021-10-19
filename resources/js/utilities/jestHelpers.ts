import { Wrapper } from '@vue/test-utils';
import Vue from 'vue';

export function testElementId(wrapper: Wrapper<Vue>, expected: String): void {
	expect(wrapper.vm.$el.id).toStrictEqual(expected);
}
