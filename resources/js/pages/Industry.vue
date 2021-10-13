<template>
	<div id="page-industry">
		<h2>Industry</h2>
		<AddName field-name="Industry" @addNameSave="saveName"></AddName>
		<IndustryList :names="names"></IndustryList>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import AddName from '../components/AddName.vue';
import IndustryList from '../components/IndustryList.vue';

export default Vue.extend({
	name: 'Industry',
	components: {
		AddName,
		IndustryList,
	},
	data() {
		return {
			names: [] as string[],
		};
	},
	methods: {
		saveName(name: string): void {
			// TODO: save the name to the industry table
			// TODO: refresh the IndustryList table
		},
	},
});
</script>
