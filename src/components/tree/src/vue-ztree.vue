<style>
	*{
		padding: 0;
		margin: 0;
	}
	body{
		user-select: none;
		font-family: Verdana, Helvetica, Arial, sans-serif;
		font-size: 14px;
		color: #555;
	}
	ul,ol,li{
		list-style: none;
		line-height: 22px;
		text-align: left;
		cursor: pointer;
	}
	.vtree{
		width:300px;
		border: 1px solid #ddd;
		margin: auto;
	}
	.vtree .nodeitem {
		/* text-overflow: ellipsis; */
		word-wrap: break-word;
		/* word-break: break-all; */
		white-space: nowrap;
		/* width: 200px; */
		overflow: hidden;
	}
	.nodes li .nodeitem:hover{
		background-color: #ddd;
	}
	.nodeitem.node-selected{
		font-weight: bold;
		background-color: #FBE4C8;
	}
	.level1{text-indent: 0.5rem;}
	.level2{text-indent: 1.5rem;}
	.level3{text-indent: 3rem;}
	.level4{text-indent: 4.5rem;}
	.level5{text-indent: 6rem;}
	.level6{text-indent: 7.5rem;}
	.level7{text-indent: 9rem;}
</style>

<template>
	<!--（ztree－🌲）-->
	<div class="vtree" v-cloak>
		<div class="treename"></div>
		<ul class="nodes">
			<ztree-item v-for="node in nodes" :node.sync="node" :trees.sync='nodes'></ztree-item>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		// 树数据
		nodes: {
			type:Array,
			twoWay:true
		},
		// 是否展开
		isOpen: {
			type: Boolean,
			twoWay: true,
			default: false
		}
	},
	watch: {
		'nodes': {
			handler: function() {
		},
		deep: true
		}
	},
	methods: {
	},
	components: {
		// 组件
        ztreeItem: {
        	name: 'ztreeItem',
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
                open(m) {
                    m.isFolder = !m.isFolder;
                },
				nodeClick(node) {
					var isLeaf = node.children && node.children.length === 0 || !node.children;
					if(!isLeaf)
						node.expand = !node.expand;
					node.selected = !node.selected;
					// this.$set(node, 'toggle', !isLeaf && expand);
				}
        	},
        	computed: {
        	},
            template: 
            `<li :class="['level' + node.level]">
				<div class="nodeitem" :class="{'node-selected':node.selected}" @click="nodeClick(node)">
					<i :class="['iconfont', node.icon]"></i>
					<span>{{ node.title }}</span>
				</div>
				<ul v-if='node.expand'>
					<ztree-item v-for="node in node.children" :node.sync="node" :trees.sync='trees'></ztree-item>
				</ul>
            </li>`
		}
	}
}
</script>