<template>
    <div :class="prefixCls + '-body'" @click="handleClick" @mousemove="handleMouseMove">
		<div :class="prefixCls + '-cells'">
			<div :class="prefixCls + '-weeks'">
				<span>日</span>
				<span>一</span>
				<span>二</span>
				<span>三</span>
				<span>四</span>
				<span>五</span>
				<span>六</span>
			</div>
			<div v-for="(row,i) in rows" :class="prefixCls + '-row'">
				<span :index="i*7+j" :class="getCellCls(cell)" v-for="(cell,j) in row">{{ cell.text }}</span>
			</div>
		</div>
    </div>
</template>

<script>
    import { getFirstDayOfMonth, getDayCountOfMonth } from '../util';
    import { deepCopy } from '../../../../utils/assist';
    
    const prefixCls = 'date-picker';
    const clearHours = function (time) {
        const cloneDate = new Date(time);
        cloneDate.setHours(0, 0, 0, 0);
        return cloneDate.getTime();
    };

    export default {
        props: {
            date: {},
            minDate: {},
            maxDate: {},
            month: {},
            year: {},
            value: '',
            disabledDate: {},
            selectionMode: {
                default: 'day'
            },
            rangeState: {
                default () {
                    return {
                        endDate: null,
                        selecting: false
                    };
                }
            }
        },
        data () {
           return {
                prefixCls: prefixCls,
                readCells: []
            }; 
        },
        watch: {
            'rangeState.endDate' (newVal) {
                this.markRange(newVal);
            },
            minDate(newVal, oldVal) {
                if (newVal && !oldVal) {
                    this.rangeState.selecting = true;
                    this.markRange(newVal);
                } else if (!newVal) {
                    this.rangeState.selecting = false;
                    this.markRange(newVal);
                } else {
                    this.markRange();
                }
            },
            maxDate(newVal, oldVal) {
                if (newVal && !oldVal) {
                    this.rangeState.selecting = false;
                    this.markRange(newVal);
                }
            },
            cells: {
                handler (cells) {
                    this.readCells = cells;
                },
                immediate: true
            }
        },
        computed: {
            cells () {
                const date = new Date(this.year, this.month, 1);
                let day = getFirstDayOfMonth(date);    // day of first day
                day = (day === 0 ? 7 : day);
                const today = clearHours(new Date());    // timestamp of today
                const selectDay = clearHours(new Date(this.value));    // timestamp of selected day
                const minDay = clearHours(new Date(this.minDate));
                const maxDay = clearHours(new Date(this.maxDate));

                const dateCountOfMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth());
                const dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), (date.getMonth() === 0 ? 11 : date.getMonth() - 1));

                const disabledDate = this.disabledDate;

                let cells = [];
                const cell_tmpl = {
                    text: '',
                    type: '',
                    selected: false,
                    disabled: false,
                    range: false,
                    start: false,
                    end: false
                };
                if (day !== 7) {
                    for (let i = 0; i < day; i++) {
                        const cell = deepCopy(cell_tmpl);
                        cell.type = 'prev-month';
                        cell.text = dateCountOfLastMonth - (day - 1) + i;

                        let prevMonth = this.month - 1;
                        let prevYear = this.year;
                        if (this.month === 0) {
                            prevMonth = 11;
                            prevYear -= 1;
                        }
                        const time = clearHours(new Date(prevYear, prevMonth, cell.text));
                        cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                        cells.push(cell);
                    }
                }

                for (let i = 1; i <= dateCountOfMonth; i++) {
                    const cell = deepCopy(cell_tmpl);
                    const time = clearHours(new Date(this.year, this.month, i));
                    cell.type = time === today ? 'today' : 'normal';
                    cell.text = i;
                    cell.selected = time === selectDay;
                    cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                    cell.range = time >= minDay && time <= maxDay;
                    cell.start = this.minDate && time === minDay;
                    cell.end = this.maxDate && time === maxDay;

                    cells.push(cell);
                }

                const nextMonthCount = 42 - cells.length;
                for (let i = 1; i <= nextMonthCount; i++) {
                    const cell = deepCopy(cell_tmpl);
                    cell.type = 'next-month';
                    cell.text = i;

                    let nextMonth = this.month + 1;
                    let nextYear = this.year;
                    if (this.month === 11) {
                        nextMonth = 0;
                        nextYear += 1;
                    }
                    const time = clearHours(new Date(nextYear, nextMonth, cell.text));
                    cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                    cells.push(cell);
                }

                return cells;
            },
			rows () {
				var rows = [],
					length = this.cells.length,
					count = Math.ceil(length / 7);

				for (var i = 0; i < count; i++) {
					rows[i] = this.cells.slice(i * 7, (i + 1) * 7);
				}
				return rows;
			}
        },
        methods: {
            getDateOfCell (cell) {
                let year = this.year;
                let month = this.month;
                let day = cell.text;

                const date = this.date;
                const hours = date.getHours();
                const minutes = date.getMinutes();
                const seconds = date.getSeconds();

                if (cell.type === 'prev-month') {
                    if (month === 0) {
                        month = 11;
                        year--;
                    } else {
                        month--;
                    }
                } else if (cell.type === 'next-month') {
                    if (month === 11) {
                        month = 0;
                        year++;
                    } else {
                        month++;
                    }
                }

                return new Date(year, month, day, hours, minutes, seconds);
            },
            handleClick (event) {
                const target = event.target;
                if (target.tagName === 'SPAN') {
                    const cell = this.cells[parseInt(event.target.getAttribute('index'))];
                    if (cell.disabled) return;

                    const newDate = this.getDateOfCell(cell);

                    if (this.selectionMode === 'range') {
                        if (this.minDate && this.maxDate) {
                            const minDate = new Date(newDate.getTime());
                            const maxDate = null;
                            this.rangeState.selecting = true;
                            this.markRange(this.minDate);

                            this.$emit('on-pick', {minDate, maxDate}, false);
                        } else if (this.minDate && !this.maxDate) {
                            if (newDate >= this.minDate) {
                                const maxDate = new Date(newDate.getTime());
                                this.rangeState.selecting = false;

                                this.$emit('on-pick', {minDate: this.minDate, maxDate});
                            } else {
                                const minDate = new Date(newDate.getTime());

                                this.$emit('on-pick', {minDate, maxDate: this.maxDate}, false);
                            }
                        } else if (!this.minDate) {
                            const minDate = new Date(newDate.getTime());
                            this.rangeState.selecting = true;
                            this.markRange(this.minDate);

                            this.$emit('on-pick', {minDate, maxDate: this.maxDate}, false);
                        }
                    } else {
                        this.$emit('on-pick', newDate);
                    }
                }
                this.$emit('on-pick-click');
            },
            handleMouseMove (event) {
                if (!this.rangeState.selecting) return;

                this.$emit('on-changerange', {
                    minDate: this.minDate,
                    maxDate: this.maxDate,
                    rangeState: this.rangeState
                });

                const target = event.target;
                if (target.tagName === 'SPAN') {
                    const cell = this.cells[parseInt(event.target.getAttribute('index'))];
                    this.rangeState.endDate = this.getDateOfCell(cell);
                }
            },
            markRange (maxDate) {
                const minDate = this.minDate;
                if (!maxDate) maxDate = this.maxDate;

                const minDay = clearHours(new Date(minDate));
                const maxDay = clearHours(new Date(maxDate));

                this.cells.forEach(cell => {
                    if (cell.type === 'today' || cell.type === 'normal') {
                        const time = clearHours(new Date(this.year, this.month, cell.text));
                        cell.range = time >= minDay && time <= maxDay;
                        cell.start = minDate && time === minDay;
                        cell.end = maxDate && time === maxDay;
                    }
                });
            },
            getCellCls (cell) {
                return [
                    {
                        [`cell-selected`]: cell.selected || cell.start || cell.end,
                        [`cell-disabled`]: cell.disabled,
                        [`today`]: cell.type === 'today',
                        [`prev-month`]: cell.type === 'prev-month',
                        [`next-month`]: cell.type === 'next-month',
                        [`cell-range`]: cell.range && !cell.start && !cell.end
                    }
                ];
            }
        }
    };
</script>