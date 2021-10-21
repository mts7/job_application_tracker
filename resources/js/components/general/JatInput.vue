<template>
	<div class="d-inline" :id="`${inputId}_container`">
		<label
			v-if="labelValue.length > 0"
			class="label-input"
			:for="inputId">
			{{ labelValue }}
		</label>
		<input
			:class="`input-${inputType}`"
			:id="inputId"
			:placeholder="inputPlaceholder"
			:type="inputType"
			v-model="inputValue" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'JatInput',
	props: {
		inputId: {
			required: true,
			type: String,
		},
		inputPlaceholder: {
			default: '',
			type: String,
		},
		inputType: {
			default: 'text',
			type: String,
		},
		labelValue: {
			default: '',
			type: String,
		},
	},
	data() {
		return {
			inputValue: '' as string,
		};
	},
});
</script>
