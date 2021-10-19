<template>
	<NamePage
		itemName="Position"
		:names="names"
		@saveName="saveName"></NamePage>
</template>

<script lang="ts">
import Vue from 'vue';
import NamePage from '../components/NamePage.vue';

export default Vue.extend({
	name: 'Position',
	components: {
		NamePage,
	},
	data() {
		return {
			names: [] as string[],
		};
	},
	methods: {
		getNames(): void {},
		saveName(name: string): void {
			this.names.push(name);
		},
	},
});
</script>
