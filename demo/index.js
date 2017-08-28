import Vue from 'vue'
import VueD3 from '../src'
import Demo from './Demo.vue'

Vue.use(VueD3);

new Vue({
	el: '#demo',
	render: h => h(Demo)
});