var commonjs1 = require('./commonjs');
var amd1 = require('./amd');
var labeled1 = require('./labeled');

require([
    './commonjs',
    './amd',
    './labeled',
    '../require.context/templates/'+amd1+'.js',
    Math.random()<.5 ? './commonjs':'./amd'], 
    function(commonjs2, amd2, labeled2, template, randModule) {
        
    }
);

require: './labeled';