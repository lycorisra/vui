<template>
    <li class="dropdown" :class="{'selected':selected}" @click.stop="selectOption">
        <slot>
            <span>{{text}}</span>
        </slot>
    </li>
</template>

<script>
    import Emittter from '../../../utils/emitter';
    export default {
        mixins:[Emittter],
        name: 'ElOption',
        componentName: 'ElOption',
        props: {
           value: {
               required: true
           },
           text: [String, Number],
           tag:  [Boolean, String, Number, Array, Object]
        },
        data() {
            return {
                index: -1,
                groupDisabled: false,
                visible: true,
                hitState: false
            };
        },
        computed: {
            parent() {
                var result = this.$parent;
                // while (!parent.isSelect) {
                //     result = parent.$parent;
                // }
                return result;
            },
            selected() {
                var result = false;
                if(!this.parent.multiple)
                    result = this.value == this.parent.value;
                else
                    result = this.parent.value.indexOf(this.value) > -1;
                return result;
            }
        },
        methods: {
            selectOption() {
                this.dispatch('ElSelect', 'selectOption', this);
            }
        },
        created() {
            this.parent.options.push(this);
        },
    }
</script>