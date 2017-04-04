<template>
	<div>
		<Date-picker type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
	</div>
</template>

<script>
    import DatePicker from './src/picker/date-picker';

    export default {
        name: 'app',
        data() {
            return {}
        },
        components: {
            DatePicker
        }
    }
</script>