<template>
	<div id="component-industry-list">
		<h3>Industry List</h3>
		<div>
			<table id="table_industry-list" aria-label="Industry List Table">
				<thead>
					<tr>
						<th id="table_industry-list_name">Name</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="name in names" :key="name">
						<td class="table_industry-list_name">
							{{ name }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'IndustryList',
	props: {
		names: {
			required: true,
			type: Array,
		},
	},
});
</script>
