<template>
	<NamePage
		itemName="Industry"
		:names="names"
		@saveName="saveName"></NamePage>
</template>

<script lang="ts">
import Vue from 'vue';
import NamePage from '../components/NamePage.vue';

export default Vue.extend({
	name: 'Industry',
	components: {
		NamePage,
	},
	data() {
		return {
			names: [] as string[],
		};
	},
	created() {
		this.getNames();
	},
	methods: {
		getNames(): void {
			// TODO: get the names from the industry table
		},
		saveName(name: string): void {
			this.names.push(name);
			// TODO: save the name to the industry table
			// TODO: refresh the IndustryList table
		},
	},
});
</script>
