<template>
	<div :id="id"></div>
</template>

<script>
	import * as d3 from 'd3'

	export default {
		data() {
			return {

			}
		},
		mounted() {
			const container = d3.select('#' + this.id);
			const svg = container.append('svg');

			svg.attr('class', 'svg')
				.attr('width', '100%')
				.attr('height', '100%');

			
		},
		props: ['id']
	}
</script>