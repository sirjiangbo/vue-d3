<template>
	<div :id="id">
		<p></p>
		<p></p>
	</div>
</template>

<script>
	import { select, selectAll } from 'd3-selection'
	import * as axis from 'd3-axis'
	import { scaleLinear, scaleBand } from 'd3-scale'
	import { interpolateString } from 'd3-interpolate'

	export default {
		data() {
			return {
				padding: 20,
				h: 300,
				w: 600,
				a: ['red', 'blue', 'yellow', 'gray', 'black', 'white'],
				b: ['one', 'two', 'three', 'four', 'five', 'six']
			}
		},
		mounted() {
			this.handleClick();
		},
		methods: {
			handleClick() {
				const innerH = this.h - this.padding * 2;
				const innerW = this.w - this.padding * 2;
				const scale = scaleLinear().domain([0, 9]).range([0, innerH]);
				const xxScale = scaleBand().domain(this.a).range([0, innerW]);
				const xScale = scaleLinear().domain([0, this.list.length]).range([0, innerW]);
				const yscale = scaleLinear().domain([9, 0]).range([0, innerH]);
				const xAxis = axis.axisBottom().scale(xxScale);
				const yAxis = axis.axisLeft(yscale);
				select('#' + this.id)
					.append('svg')
					.attr('class', 'svg')
					.attr('width', this.w)
					.attr('height', this.h)
					.selectAll('rect')
					.data(this.list)
					.enter()
				  .append("rect")
				  .attr("fill", "teal")
				  .attr("x", (d, i) => {
				  	return i * 21 + this.padding + 10;
				  })
				  .attr("y", (d, i) => {
				  	return this.h - this.padding - scale(d);
				  })
				  .attr("width", 20)
				  .attr("height", function(d, i) {
				  	return scale(d);
				  });

				select('#' + this.id + ' svg') 
					.append('g')
					.attr('class', 'axis-x')
					.attr('transform', 'translate(' + (this.padding + 10) + ',' + (this.h - this.padding) + ')')
					.call(xAxis);

				select('#' + this.id + ' svg') 
					.append('g')
					.attr('class', 'axis')
					.attr('transform', 'translate(' + this.padding + ',' + this.padding + ')')
					.call(yAxis);
			}
		},
		props: ['id', 'list']
	}
</script>

<style>
	.svg {
		background: #f5f5f5;
	}
	.axis-x path {
		visibility: hidden;
	}
	line {
		shape-rendering: crispEdges;
	}
</style>