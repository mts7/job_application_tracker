<template>
	<div :id="`component-${itemUseName}-list`">
		<h3>{{ itemDisplayName }} List</h3>
		<div>
			<table
				v-if="names.length > 0"
				:id="`table_${itemUseName}-list`"
				:aria-label="`${itemDisplayName} List Table`">
				<thead>
					<tr>
						<th :id="`table_${itemUseName}-list_name`">Name</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="name in names" :key="name">
						<td :class="`table_${itemUseName}-list_name`">
							{{ name }}
						</td>
					</tr>
				</tbody>
			</table>
			<div v-else :id="`text_${itemUseName}-list_no-records`">
				{{ textNoRecords }}
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'NameList',
	props: {
		itemDisplayName: {
			required: true,
			type: String,
		},
		itemUseName: {
			required: true,
			type: String,
		},
		names: {
			required: true,
			type: Array,
		},
	},
	data() {
		return {
			textNoRecords: 'No Records Found',
		};
	},
});
</script>
