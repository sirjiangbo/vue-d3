<template>
	<div>
		<!-- <Bar :id="'bar1'" :list="list"></Bar> -->
		<d-line :id="'line1'"></d-line>
	</div>
</template>

<script>
	import Bar from './Bar.vue'
	import dLine from './Line.vue'

	export default {
		data() {
			return {
				list: [1, 3, 9, 7, 5, 2.5]
			}
		},
		components: {
			Bar,
			dLine
		}
	}
</script>