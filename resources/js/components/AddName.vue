<template>
	<div id="component_add-name">
		<label for="input_name" class="label-input">
			Add a new {{ fieldName }}
		</label>
		<input
			type="text"
			id="input_name"
			class="input-text"
			placeholder="Name"
			v-model="nameValue" />
		<button
			id="button_input_name"
			class="button button-input"
			@click="emitSaveName">
			Save
		</button>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'AddName',
	props: {
		fieldName: {
			required: true,
			type: String,
		},
	},
	data() {
		return {
			nameValue: '' as string,
		};
	},
	methods: {
		emitSaveName(): void {
			if (this.nameValue.length === 0) {
				// TODO: consider adding a validation message somewhere
				return;
			}

			this.$emit('addNameSave', this.nameValue);

			// clear the field
			this.nameValue = '';
		},
	},
});
</script>

<style scoped lang="scss">
button {
	cursor: pointer;
}
</style>
