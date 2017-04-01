<template>
	<div>
		<el-select textField="text" valueField="value" :checkedItem="option" placeholder="placeholder" :required="required">
			<el-option v-for="item in options" :text.sync="item.label" :value.sync="item.value"></el-option>
		</el-select>
	</div>
</template>

<script>
	import elSelect from './src/select'
	import elOption from './src/option'
	export default {
	name: 'app',
		data() {
			return {
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, 
				{
					value: '选项2',
					label: '双皮奶'
				}, 
				{
					value: '选项3',
					label: '蚵仔煎'
				}, 
				{
					value: '选项4',
					label: '龙须面'
				}, 
				{
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: '选项2',
				text: '',
				required:'required',
				placeholder:'qweee',
				option: {value:'选项3',text:''} 
			}
		},
		components: {
			elSelect,elOption
		}
	}
</script>
