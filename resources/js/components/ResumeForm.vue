<template>
	<div id="page-resume-form">
		<ValidationObserver v-slot="{ handleSubmit, invalid }">
			<div class="row">
				<div class="col-sm-12">
					<ValidationProvider
						name="Title"
						rules="required"
						v-slot="{ errors }">
						<JatInput
							:errors="errors"
							inputId="input_resume-title"
							inputPlaceholder="Title"
							:labelColumns="labelColumns"
							labelValue="Title"
							v-model="inputTitle"></JatInput>
					</ValidationProvider>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12">
					<ValidationProvider
						name="Version"
						rules="required|positive"
						:bails="false"
						v-slot="{ errors }">
						<JatInput
							:errors="errors"
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
					<ValidationProvider
						name="Location"
						rules="required|max:3"
						:bails="false"
						v-slot="{ errors }">
						<JatInput
							:errors="errors"
							input-id="input_resume-location"
							inputPlaceholder="Location"
							:labelColumns="labelColumns"
							labelValue="Location (State)"
							:maxLength="4"
							v-model="inputLocation"></JatInput>
					</ValidationProvider>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12">
					<ValidationProvider
						name="Phone"
						rules="required"
						v-slot="{ errors }">
						<JatInput
							:errors="errors"
							input-id="input_resume-phone"
							inputPlaceholder="Phone"
							inputType="tel"
							:labelColumns="labelColumns"
							labelValue="Phone"
							v-model="inputPhone"></JatInput>
					</ValidationProvider>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12">
					<ValidationProvider
						name="Email"
						rules="required|email"
						v-slot="{ errors }">
						<JatInput
							:errors="errors"
							input-id="input_resume-email"
							inputPlaceholder="Email"
							inputType="email"
							:labelColumns="labelColumns"
							labelValue="Email"
							v-model="inputEmail"></JatInput>
					</ValidationProvider>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12">
					<JatButton
						buttonText="Save"
						:disabled="invalid"
						input-id="button_resume-save"
						@buttonClicked="handleSubmit(saveResume)"></JatButton>
				</div>
			</div>
		</ValidationObserver>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import JatButton from './general/JatButton.vue';
import JatInput from './general/JatInput.vue';

export default Vue.extend({
	name: 'ResumeForm',
	components: { JatButton, JatInput, ValidationObserver, ValidationProvider },
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
