<template>
    <div class="dropdown" @click.stop="toggleMenu" v-clickoutside="closeMenu">
        <span class="inputwrap">
            <input type="text" :readonly="!filter || multiple" v-model="text" placeholder="请选择项">
            <i class="arrow"></i>
        </span>
        <ul class="options" :style="styles">
            <slot>
                <span></span>
            </slot>
        </ul>
    </div>
</template>

<script>
    import { setPos } from '../../utils/dom';
    import Emitter from '../../utils/emitter';
    import Clickoutside from '../../utils/clickoutside';
    import css from '../../../examples/assets/styles/color-brewer.css';

    // 注意：props对象中的属性（作为组件的属性）不能有大写字母，否则将获取不到父组件传递的数据
    export default {
        mixins: [Emitter],
        name: 'ElSelect',
        componentName: 'ElSelect',
        props: {
            clear: Boolean,
            filter: Boolean,
            checkeditem: [String, Number, Array, Object],
            tagfield: [Boolean, String, Number, Array, Object],
            valuefield: String,
            textfield: String,
            multiple: Boolean
        },
        data() {
            return {
                text: String,
                value: [ String, Number, Array ],
                visible: false,
                options: [],
                cachedOptions: []
            }
        },
        computed: {
            styles() {
                var style = {
                    'z-index': -1,
                    opacity: 0,
                    display: 'block'
                }
                if (this.visible == true) {
                    style = {
                        'z-index': 20,
                        opacity: 1,
                        display: 'block'
                    }
                }
                return style;
            }
        },
        // components: { ElOption },
        directives: { Clickoutside },
        watch: {
            value(val) {
                if (this.multiple) {
                    this.setSelected();
                    // this.$emit('change', val);
                }
            }
        },
        methods: {
            getOption(value) {
                for (var i = 0,option; option = this.options[i]; i++) {
                    if (option.value == value) {
                        return option;
                    }
                }
                
                const label = typeof value === 'string' || typeof value === 'number' ? value : '';
                var newOption = {
                    value: value,
                    text: label
                };
                if (this.multiple) {
                    newOption.hitState = false;
                }
                return newOption;
            },
            setSelected() {
                if (!this.multiple) {
                    var option = this.getOption(this.value);
                }
            },
            toggleMenu(visible) {
                this.visible = !this.visible;
                if (this.visible) {
                    var i = 0,
                        ul = document.querySelector('.dropdown ul.options', this.$el);

                    setPos(ul);
                }
            },
            closeMenu() {
                this.visible = false;
            },
            selectOption(option) {
                if (!this.multiple) {
                    var item = {
                        value: option.value,
                        text: option.text
                    };
                    this.$emit('change', item);
                    // this.$emit('input', option);
                    // Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value
                    this.text = option.text; 
                    this.value = option.value; 
                    this.visible = false;
                    // this.$parent[this.value] = option.value;
                    // this.$parent[this.text] = option.text;
                    var obj = (this.checkeditem) ? this.checkeditem : this.$parent;

                    this.$parent.$set(obj, this.valuefield, option.value);
                    this.$parent.$set(obj, this.textfield, option.text);
                    this.$parent.$set(obj, this.tagfield, option.tag);
                    
                    // if (this.checkedItem) {
                    //     this.$parent.$set(this.checkedItem, this.valueField, option.value);
                    //     this.$parent.$set(this.checkedItem, this.textField, option.text);
                    // }
                    // this.$parent.$set(this.$parent.option,this.value,option.value);
                    // this.$parent.$set(this.$parent.option,this.text,option.text);
                } 
                else {
                    var index = -1;
                    this.value.forEach((item, i) => {
                        if (item === option.value) {
                            index = i;
                        }
                    });
                    if (index > -1) {
                        this.value.splice(index, 1);
                    } 
                    else {
                        this.value.push(option.value);
                    }
                    // if (this.filterable) this.$refs.input.focus();
                }
            }
        },
        created() {
            this.$on('selectOption', this.selectOption);
            // this.$on('onOptionDestroy', this.onOptionDestroy);
            // this.$on('setSelected', this.setSelected);
        },
        mounted() {
            var obj = (this.checkeditem) ? this.checkeditem : this.$parent,
                value = obj[this.valuefield];

            var option = this.getOption(value);
            this.text = option.text; 
            console.log(this.styles);
        }
    };
</script>