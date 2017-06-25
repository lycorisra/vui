<template>
	<div id='app'>
		<vue-ztree :nodes.sync='ztreeDataSource' :is-open='true'></vue-ztree>
	</div>
</template>

<script>
import vueZtree from './src/vue-ztree.vue'
import data from './static/data/department.json'

export default {
	name: 'app',
	components: {
		vueZtree
	},
	created: function () {
		this.getTree();
	},
	data() {
		return {
			msg: 'Hello Vue-Ztree!',
			ztreeDataSource: []
		}
	},
	methods: {
		getTree: function () {
			this.ztreeDataSource = data;
			// this.$http.get('static/data/CodeStudio.json')
			// 	.then((response) => {
			// 		this.$set(this, 'ztreeDataSource', response.data.nodes);
			// 	})
			// 	.catch((error) => {
			// 		console.log(error);
			// 	})
		}
	}
}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>