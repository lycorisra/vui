//Vue.component('Tree', {
//    render: function (createElement) {
//        return createElement(
//          'div', { staticClass: "vtree" },
//          [
//            createElement('div', { attrs: { 'class': 'treename' } }, this.$slots.default),
//            createElement('ul', { attrs: { 'class': 'nodes' } }, this.$slots.default)
//          ]
//        )
//    },
//    props: {
//        nodes: {
//            type: Array,
//            required: true
//        },
//        isOpen: {
//            type: Array,
//            required: true
//        }
//    }
//})

// 定义组件模板，模板必须有且只有一个根元素。
var template = ''.concat(
    '<div class="vtree" v-cloak>',
		'<div class="treename"></div>',
		'<ul class="nodes">',
			'<ztree-item ref="u-tree" v-for="node in nodes" :node.sync="node" :trees.sync="nodes"></ztree-item>',
		'</ul>',
	'</div>');
var childTemplate= `
    <li :class="['level' + node.level]">
		<div class="nodeitem" :class="{'node-selected':node.selected}" @click="nodeClick(node)">
			<i class="ivu-icon" :class="{'ivu-icon-arrow-right-b':node.children.length>0}"></i>
			<span>{{ node.title }}</span>
		</div>
		<ul v-if='node.expand'>
			<tree-item v-for="node in node.children" :node.sync="node" :trees.sync='trees'></tree-item>
		</ul>
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
        checkedNodes: {
            type: Array,
            default:[]
        },
        aaaa: {
            type: Array
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
                trees: {
                    type: Array,
                    twoWay: true,
                    default: []
                }
            },
            methods: {
                open: function (m) {
                    m.isFolder = !m.isFolder;
                },
                nodeClick: function (node) {
                    var isLeaf = node.children && node.children.length === 0 || !node.children;
                    if (!isLeaf)
                        node.expand = !node.expand;
                    node.selected = !node.selected;
                    if (node.selected) {
                        this.$parent.checkedNodes.push(node);
                    }
                    else {
                        var index = this.$parent.checkedNodes.indexOf(node);
                        this.$parent.checkedNodes.splice(index, 1);
                    }
                }
            },
            template: childTemplate
        }
    }
});