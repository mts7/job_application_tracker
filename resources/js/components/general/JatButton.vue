<template>
	<div class="d-inline" :id="`${inputId}_container`">
		<button class="btn btn-success" @click="$emit('buttonClicked', inputId)">
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
		inputId: {
			required: true,
			type: String,
		},
	},
});
</script>
