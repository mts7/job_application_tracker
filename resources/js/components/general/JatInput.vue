<template>
	<div class="d-inline" :id="`${inputId}_container`">
		<div class="row">
			<div :class="`col-sm-${labelColumns}`">
				<label
					v-if="labelValue.length > 0"
					class="label-input"
					:for="inputId">
					{{ labelValue }}
				</label>
			</div>
			<div :class="`col-sm-${inputColumns}}`">
				<input
					:class="`input-${inputType}`"
					:id="inputId"
					:placeholder="inputPlaceholder"
					:type="inputType"
					v-model="inputValue"
					v-on:input="$emit('input', $event.target.value)"/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { validateNumberBetween } from '../../utilities';
import { htmlInputTypes } from '../../utilities/lookups';

export default Vue.extend({
	name: 'JatInput',
	props: {
		inputId: {
			required: true,
			type: String,
			validator: (value) => {
				return value.indexOf(' ') === -1;
			},
		},
		inputPlaceholder: {
			default: '',
			type: String,
		},
		inputType: {
			default: 'text',
			type: String,
			validator: (value) => {
				return htmlInputTypes.indexOf(value) >= 0;
			},
		},
		labelColumns: {
			default: 6,
			type: Number,
			validator: (value) => {
				return validateNumberBetween(1, 11, value);
			},
		},
		labelValue: {
			default: '',
			type: String,
		},
	},
	computed: {
		inputColumns(): Number {
			return 12 - this.labelColumns;
		},
	},
	data() {
		return {
			inputValue: '' as string,
		};
	},
});
</script>
