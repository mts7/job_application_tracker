<template>
	<div id="page-resume-add">
		<h2>Create a new Résumé</h2>
		<ResumeForm @saveResume="createResume"></ResumeForm>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import ResumeForm from '../components/ResumeForm.vue';
import RoutesNames from '../router/routesNames';
import { IResumeFields } from '../types/Resume';

export default Vue.extend({
	name: 'ResumeAdd',
	components: { ResumeForm },
	methods: {
		createResume(values: IResumeFields): void {
			// TODO: save values to the database

			this.$router.push(RoutesNames.resume);
		},
	},
});
</script>
