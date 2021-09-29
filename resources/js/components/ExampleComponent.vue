<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-8">
				<div class="card">
					<div class="card-header">Example Component</div>

					<div class="card-body">
						I'm an example component with a custom phrase.
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class ExampleComponent extends Vue {
	mounted() {
		console.log('Component mounted.');
	}
}
</script>
