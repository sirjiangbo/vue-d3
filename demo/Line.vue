<template>
	<div :id="id"></div>
</template>

<script>
	import { select, style } from 'd3-selection'
	import { line, radialLine } from 'd3-shape'
	import { axisBottom, axisLeft } from 'd3-axis'
	import { scaleLinear, scaleBand } from 'd3-scale'
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
				],
				data: {
					xAxis: {
						type: 'item',
						items: ['one', 'two', 'three', 'four', 'five', 'six']
					},
					yAxis: {
						type: 'value',
						series: [30, 400, 230, 600, 89, 800]
					},
				}
			}
		},
		mounted() {
			const svgWidth = this.width || width;
			const svgHeight = this.height || height;
			const container = select('#' + this.id);
			const svg = container.append('svg');
			const realWidth = parseFloat(container.style('width'));
			const innerWidth = realWidth - padding * 2;
			const innerHeight = svgHeight - padding * 2;
			const itemWidth = innerWidth / (this.data.xAxis.items.length - 1);
			const xScale = scaleLinear().domain([0,this.data.xAxis.items.length - 1]).range([0, innerWidth]);
			const yScale = scaleLinear().domain([800, 0]).range([0, innerHeight]);
			const xAxis = axisBottom().scale(xScale).ticks(this.data.xAxis.items.length - 1);
			const yAxis = axisLeft().scale(yScale).ticks(20);
			
			const realValue = this.data.yAxis.series.map((v, i) => {
				return {
					value: svgHeight - padding - yScale(800 - v),
					item: i * itemWidth + padding
				}
			});
			const _line = line().x(d => d.item).y(d => d.value)(realValue);
			
			svg.attr('class', 'svg')
				.attr('width', svgWidth)
				.attr('height', svgHeight)
				.append('path')
				.attr('class', 'line')
				.attr('d', _line);

			// realValue.forEach((v, i) => {
			// 	const _line2 = line().x(d => d.item).y(d => d.value)([
			// 		{
			// 			value:  v.value,
			// 			item: padding
			// 		},
			// 		{
			// 			value: v.value,
			// 			item: 5 * itemWidth + padding
			// 		}
			// 	]);
			// 	svg.append('path')
			// 		.attr('class', 'line2')
			// 		.attr('d', _line2);	
			// });

			svg.append('g')
				.attr('transform', 'translate(' + padding + ', ' + (svgHeight - padding) + ')')
				.call(xAxis)
				.selectAll('text')
				.data(this.data.xAxis.items)
				.text(function(d, i) {
					return d;
				});

			svg.append('g')
				.attr('transform', 'translate(' + padding + ', ' + padding + ')')
				.call(yAxis);
			
		},
		props: ['id', 'width', 'height']
	}
</script>
<style>
	.svg {
		background: #f8f8f8;
	}
	.line {
	  fill: none;
	  stroke: steelblue;
	  stroke-width: .5px;
	}
	.line:hover {
		stroke: red;
	}
	.line2 {
	  fill: none;
	  stroke: red;
	  stroke-width: .5px;
	}
</style>