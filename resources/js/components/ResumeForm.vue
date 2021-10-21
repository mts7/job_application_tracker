<template>
	<div id="page-resume-form">
		<div class="row">
			<div class="col-sm-12">
				<JatInput
					inputId="input_resume-title"
					inputPlaceholder="Title"
					:labelColumns="labelColumns"
					labelValue="Title"
					v-model="inputTitle"></JatInput>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<ValidationProvider>
					<JatInput
						input-id="input_resume-version"
						inputPlaceholder="Version"
						inputType="number"
						:labelColumns="labelColumns"
						labelValue="Version"
						v-model="inputVersion"></JatInput>
				</ValidationProvider>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<JatInput
					input-id="input_resume-location"
					inputPlaceholder="Location"
					:labelColumns="labelColumns"
					labelValue="Location (State)"
					v-model="inputLocation"></JatInput>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<JatInput
					input-id="input_resume-phone"
					inputPlaceholder="Phone"
					inputType="tel"
					:labelColumns="labelColumns"
					labelValue="Phone"
					v-model="inputPhone"></JatInput>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<JatInput
					input-id="input_resume-email"
					inputPlaceholder="Email"
					inputType="email"
					:labelColumns="labelColumns"
					labelValue="Email"
					v-model="inputEmail"></JatInput>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<JatButton
					buttonText="Save"
					input-id="button_resume-save"
					@buttonClicked="saveResume"></JatButton>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import JatButton from './general/JatButton.vue';
import JatInput from './general/JatInput.vue';

export default Vue.extend({
	name: 'ResumeForm',
	components: { JatButton, JatInput },
	data() {
		return {
			inputEmail: '' as string,
			inputLocation: '' as string,
			inputPhone: '' as string,
			inputTitle: '' as string,
			inputVersion: '' as string,
			labelColumns: 2 as number,
		};
	},
	methods: {
		saveResume(inputId: string): void {
			this.$emit('saveResume', {
				title: this.inputTitle,
				version: parseInt(this.inputVersion),
				location: this.inputLocation,
				phone: this.inputPhone,
				email: this.inputEmail,
			});
		},
	},
});
</script>
