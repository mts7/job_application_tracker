<template>
	<div class="d-inline" :id="`${inputId}_container`">
		<button
			class="btn btn-success"
			:disabled="disabled"
			:id="`button_${inputId}`"
			@click="$emit('buttonClicked', inputId)">
			{{ buttonText }}
		</button>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'JatButton',
	props: {
		buttonText: {
			required: true,
			type: String,
		},
		disabled: {
			default: false,
			type: Boolean,
		},
		inputId: {
			required: true,
			type: String,
		},
	},
});
</script>
