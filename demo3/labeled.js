exports: var a = 123;

// use amd module style
require([
    './commonjs',
    './amd'
],
    function(common1, amd1) {
        var common2 = require('./commonjs');
        var amd2 = requre('./amd');
    }
)