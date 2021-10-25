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
			<div :class="`col-sm-${inputColumns}`">
				<input
					:class="`input-${inputType}`"
					:id="inputId"
					:maxlength="maxLength"
					:placeholder="inputPlaceholder"
					:type="inputType"
					v-model="inputValue"
					v-on:input="$emit('input', $event.target.value)" />
			</div>
		</div>
		<div v-if="errors.length > 0" class="row input-error_container">
			<div class="col-sm-12">
				<div class="alert alert-danger" :id="`error_input_${inputId}`">
					<ul class="input-error_list">
						<li v-for="error in errors" class="input-error_item">{{ error }}</li>
					</ul>
				</div>
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
		errors: {
			default: () => {
				return [];
			},
			type: Array,
		},
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
		maxLength: {
			default: null,
			type: Number,
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
