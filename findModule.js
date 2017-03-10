var config = require('./webpack.config.js');
var webpack = require('webpack');
var vue = require('vue');

webpack(config,function(){
    console.log('callback')
});

