// 定义组件模板，模板必须有且只有一个根元素。
var template = `
	<div class="vtree" v-cloak>
		<div class="treename"></div>
		<ul class="nodes">
			<ztree-item ref="u-tree" v-for="node in nodes" :node.sync="node" :checkednodes.sync="checkednodes"></ztree-item>
		</ul>
	</div>`;
var childTemplate = `
    <li class="node-title" :class="childClass">
		<div class="nodeitem" :class="{'node-selected':node.selected}" @click="nodeClick(node)">
			<i class="ivu-icon" :class="getIcon()"></i>
			<span>{{ node.title }}</span>
		</div>
		<div name="slide-up">
			<ul v-if='node.expand' class="tree-child">
				<tree-item v-for="item in node.children" :node.sync="item" :checkednodes.sync='checkednodes'></tree-item>
			</ul>
		</div>
    </li>`;

// 注册一个全局的组件 组件的名字不能有大写字母，跟React的曲别啊。另外组件名最好是小写字母加横线组合。
Vue.component('u-tree', {
	name: 'u-tree',
	template: template,
	// 设置组件的属性有哪些，定义标签的属性一致。注意属性名都得是小写，不然会不认的。
	props: {
		nodes: {
			type: Array
		},
		checkednodes: {
			type: Array,
			default: []
		}
	},
	// 在组件的定义中data必须是函数，而且必须有返回值。
	data: function () {
		return {}
	},
	// 自组件
	components: {
		// 组件
		ztreeItem: {
			name: 'treeItem',
			props: {
				node: {
					twoWay: true
				},
				checkednodes: {
					type: Array,
					twoWay: true,
					default: []
				}
			},
			computed: {
				childClass() {
					return [
						'level' + this.node.level, {
							[`node-expand`]: this.node.expand
						}
					]
				}
			},
			methods: {
				getIcon() {
					var icon = '';
					if (this.node.expand)
						icon = 'ivu-icon-arrow-down-b';
					else if (this.node.children.length > 0)
						icon = 'ivu-icon-arrow-right-b';
					return icon;
				},
				open: function (m) {
					m.isFolder = !m.isFolder;
				},
				nodeClick: function (node) {
					var isLeaf = node.children && node.children.length === 0 || !node.children;
					if (!isLeaf)
						node.expand = !node.expand;
					node.selected = !node.selected;
					if (node.selected) {
						this.checkednodes.push(node);
					}
					else {
						var index = this.checkednodes.indexOf(node);
						this.checkednodes.splice(index, 1);
					}
				}
			},
			template: childTemplate
		}
	}
});