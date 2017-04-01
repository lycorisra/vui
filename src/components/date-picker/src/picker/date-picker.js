import Picker from '../picker.vue'
import DatePanel from '../panel/date.vue'
import DateRangePanel from '../panel/date-range.vue'
import { oneOf } from '../../../../utils/assist'

const getPanel = function (type) {
    if (type === 'daterange' || type === 'datetimerange') {
        return DateRangePanel;
    }
    return DatePanel;
}

export default {
    mixins: [Picker],
    props: {
        type: {
            validator(value) {
                return oneOf(value, ['year', 'month', 'date', 'daterange', 'datetime', 'datetimerange']);
            },
            default: 'date'
        },
        value: {
            defalue: ''
            // default: (this.type === 'daterange' || this.type === 'datetimerange') ? ['', ''] : ''
        }
    },
    created() {
        this.panel = getPanel(this.type);
    }
}
