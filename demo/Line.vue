<template>
	<div :id="id"></div>
</template>

<script>
	import * as d3 from 'd3'
	import { padding, width, height } from './variables'

	export default {
		data() {
			return {
				dataList: [
				  {date: 24, value: 2},
				  {date: 250, value: 95.35},
				  {date: 360, value: 30},
				  {date: 470, value: 300},
				  {date: 500, value: 23},
				  {date: 810, value: 99.47}
				]
			}
		},
		mounted() {
			const svgWidth = this.width || width;
			const svgHeight = this.height || height;
			const container = d3.select('#' + this.id);
			const svg = container.append('svg');
			const line = d3.line().x(d => d.date).y(d => d.value)(this.dataList);

			svg.attr('class', 'svg')
				.attr('width', svgWidth)
				.attr('height', svgHeight);
		},
		props: ['id', 'width', 'height']
	}
</script>
<style>
	.line {
	  fill: none;
	  stroke: steelblue;
	  stroke-width: 1.5px;
	}
</style>