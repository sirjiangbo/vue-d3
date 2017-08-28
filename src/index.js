import dBar from './bar'

const components = {
	dBar
};

const install = (Vue, opts = {}) => {
	Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
  });
};

export default {
	install
}
