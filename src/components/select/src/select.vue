<template>
    <div class="dropdown" @click.stop="toggleMenu" v-clickoutside="closeMenu">
        <span class="inputwrap">
            <input type="text" :readonly="!filter || multiple" v-model="text" :required="required" :placeholder="placeholder" />
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
    import { setPos } from '../../../utils/dom';
    import Emitter from '../../../utils/emitter';
    import Clickoutside from '../../../utils/clickoutside';
    // import css from '../../../../examples/assets/styles/color-brewer.css';

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
            multiple: Boolean,
			required: [Boolean, String],
			placeholder:[String]
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
					this.checkeditem.value=option.value;
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

<style>

*{padding:0;margin:0;
}
.content{margin:50px;
}
.dropdown {
	  position: relative;
      display: inline-block;
      box-sizing: border-box;
      -webkit-user-select: none;
      -moz-user-select: none;
      -khtml-user-select: none;
      -ms-user-select: none;
      -o-user-select: none;
      user-select: none;
}
.dropdown .inputwrap {
        height: 23px;
        position: relative;
        display: inline-block;
        padding: 0 !important;
}
.dropdown input {
        /*width: 150px;*/
        height: 23px;
		cursor: pointer;
        outline: none;
        padding: 0px 5px;
        font-size: 12px;
        border: 1px solid #ddd;
        vertical-align: text-bottom;
    	box-sizing: border-box;
}
.dropdown .arrow {
        width: 18px;
        font-size: 12px;
        color: #8E8E8E;
        text-align: center;
        box-sizing: border-box;
        position: absolute;
        top: 1px;
        right: 1px;
        bottom: 1px;
        padding: 0;
        cursor: pointer;
        background-color: #eeeeee;

        background-repeat: no-repeat;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAf0lEQVQoU5WRURGAMAxDGwdIwQIKOKT05mO1gAMkgAQchdtucGPsg+53eWnSQpwPTr34ATMbSG4AVFXP3kQzG0kagCVPiDGuIjIDmFqoiHeSGkJYn0g9qBUn81eHGkqfJB/nO+qn9A0VIMeoe3W3lCCSRyv+RPpzE/8d/rjWmgskQEnK+GqesAAAAABJRU5ErkJggg==");
        background-position: center;
}
.dropdown .arrow:hover {
            background-color:#ddd;
}
.dropdown .options {
	width: 100%;
    max-width: 500px;
    max-height: 300px;
    overflow: auto;
    position: absolute;
    z-index: 10;
    margin-top: -1px;
    text-indent: 5px;
    border: 1px solid #ddd;
    box-sizing:border-box;
    background-color: #fff;
}
.dropdown .options li {
	display: block;
	width: 100%;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    text-align: left;
    word-wrap: break-word;
    cursor: pointer;
    white-space: nowrap;
}
.dropdown .options li:hover  {
    background-color:#E4E4EC;
}
.dropdown .options li.selected{
    background-color:#FBE4C8;
}
.dropdown .result {
        display:none;
}
.dropdown .options li.level2 {
        display:none;
        color: #827F7F;
        text-indent: 1.5em;
}
.dropdown .options li.level3 {
        display:none;
        text-indent: 2em;
        color: #827F7F;
}
.dropdown .options li.level4 {
        display:none;
        text-indent: 3em;
        color: #827F7F;
}
.dropdown .options li.show {
        display: block;
}
.dropdown .options li.selected {
        font-weight:bold;
}
.dropdown .options i {
        width: 0;
        height: 0;
        line-height: 0;
        border-style: solid;
        border-width: 5px;
        vertical-align: super;
        font-size: 0;
        border-color: transparent transparent transparent #7d7c7c;
}
.dropdown .options .btn-ok {
        width:100%;
        height:30px;
        line-height:30px;
        text-align:center;
        color:#fff;
        cursor:pointer;
        background-color:#EAAD96;
}
.dropdown i.down {
        border-color: #7d7c7c transparent transparent transparent;
        border-top-width: 6px;
        vertical-align: middle;
        margin-right: 2px;
}
.dropdown i.hit:hover {
        color:green;
}

</style>