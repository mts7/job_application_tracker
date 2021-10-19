<template>
	<div :id="`page-${itemUseName}`">
		<h2>{{ itemDisplayName }}</h2>
		<AddName
			:field-name="itemDisplayName"
			@addNameSave="saveName"></AddName>
		<NameList
			:itemDisplayName="itemDisplayName"
			:itemUseName="itemUseName"
			:names="names"></NameList>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { uCFirst } from '../utilities';
import AddName from './AddName.vue';
import NameList from './NameList.vue';

export default Vue.extend({
	name: 'NamePage',
	components: {
		AddName,
		NameList,
	},
	props: {
		itemName: {
			required: true,
			type: String,
		},
		names: {
			required: true,
			type: Array,
		},
	},
	computed: {
		itemDisplayName(): string {
			return uCFirst(this.itemName);
		},
		itemUseName(): string {
			return this.itemName.toLowerCase();
		},
	},
	methods: {
		saveName(name: string): void {
			this.$emit('saveName', name);
		},
	},
});
</script>
