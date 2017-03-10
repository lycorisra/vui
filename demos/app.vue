<template>
	<div id='app'>
		<el-select textField="text" valueField="value" :checkedItem="option" placeholder="请选择" @change="change">
        	<el-option v-for="item in options" :text.sync="item.label" :value.sync="item.value"></el-option>
		</el-select>
		<input type="button" value="获取选中项" @click="submit" />

        
		<el-select textField="text" valueField="value" placeholder="请选择" @change="change">
        	<el-option v-for="item in options" :text.sync="item.label" :value.sync="item.value"></el-option>
		</el-select>
		<input type="button" value="获取value&text" @click="submit" />
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '选项2',
		text: '',
        option: {value:'选项3',text:''} 
      }
    },
	methods:{
		submit(event){
            var button = event.target.value;
            console.log(button,this.value,this.text,this.option);
			// console.log('button:'+value:'+this.value1+'text:'+this.text1,this.option);
			// console.log('value:'+this.option.value+'text:'+this.option.text);
		},
        change(e){
            // console.log(e)
			// console.log('value:'+this.option.value+'text:'+this.option.text);
        }
	}
  }
</script>
<style>
*{padding:0;margin:0;}
.content{margin:50px;}
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