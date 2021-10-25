<template>
	<div id="view-app">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<h1>MTS Job Application Tracker</h1>
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'App',
};
</script>
