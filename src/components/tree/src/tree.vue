<template>
  <div class="tree" v-cloak>
    <div class="treename">{{ name }}</div>
    <ul class="nodes">
      <li class="item" v-for="node in nodes">
        <i class="[iconfont, node.icon]"></i>
        <span>{{ node.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'tree',
    data () {
      return {
        msg: 'hello world'
      }
    },
    props: {
      name: {
        type: String,
        default: 'root'
      },
      nodes: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style>

</style>