<template>
    <div :class="classes" @click="handleClick">
        <span :class="getCellCls(cell)" v-for="(cell,index) in cells" :index="index">{{ cell.text }}</span>
    </div>
</template>
<script>
    import {
        deepCopy
    } from '../../../../utils/assist';
    const prefixCls = 'date-picker-cells';

    export default {
        props: {
            date: {},
            year: {},
            disabledDate: {},
            selectionMode: {
                default: 'year'
            }
        },
        computed: {
            classes() {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-year`
                ];
            },
            startYear() {
                return Math.floor(this.year / 10) * 10;
            },
            cells() {
                let cells = [];
                const cell_tmpl = {
                    text: '',
                    selected: false,
                    disabled: false
                };

                for (let i = 0; i < 10; i++) {
                    const cell = deepCopy(cell_tmpl);
                    cell.text = this.startYear + i;

                    const date = new Date(this.date);
                    date.setFullYear(cell.text);
                    cell.disabled = typeof this.disabledDate === 'function' && this.disabledDate(date) && this.selectionMode === 'year';

                    cell.selected = Number(this.year) === cell.text;
                    cells.push(cell);
                }

                return cells;
            }
        },
        methods: {
            getCellCls(cell) {
                return [{
                    [`cell-selected`]: cell.selected,
                    [`cell-disabled`]: cell.disabled
                }];
            },
            nextTenYear() {
                this.$emit('on-pick', Number(this.year) + 10, false);
            },
            prevTenYear() {
                this.$emit('on-pick', Number(this.year) - 10, false);
            },
            handleClick(event) {
                const target = event.target;
                if (target.tagName === 'SPAN') {
                    const cell = this.cells[parseInt(event.target.getAttribute('index'))];
                    if (cell.disabled) return;

                    this.$emit('on-pick', cell.text);
                }
                this.$emit('on-pick-click');
            }
        }
    };
</script>